const music = [
  {
    artist: "stromae",
    song: "papaoutai",
  },
  {
    artist: "C tangana",
    song: "Demasiadas mujeres",
  },
  {
    artist: "one direction",
    song: "one thing",
  },
];

const options = {
  method: "GET",
  headers: {},
};

async function fetchLyrics(artist, song) {
  const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(
    artist
  )}/${encodeURIComponent(song)}`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.lyrics;
  } catch (error) {
    console.error(`Error fetching lyrics for ${artist} - ${song}:`, error);
    return null;
  }
}

export default async function MusicPage() {
  const lyricsPromises = music.map(({ artist, song }) =>
    fetchLyrics(artist, song)
  );
  const lyricsResults = await Promise.all(lyricsPromises);

  return (
    <div className="mx-40 my-10">
      {music.map((item, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-2">
            {item.artist} - {item.song}
          </h2>
          {lyricsResults[index] ? (
            <pre className="whitespace-pre-wrap">{lyricsResults[index]}</pre>
          ) : (
            <p>No se pudieron obtener las letras para esta canción.</p>
          )}
        </div>
      ))}
    </div>
  );
}
