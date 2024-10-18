export default function Navbar() {
  return (
    <div className="w-full h-16 bg-neutral-300 flex flex-row px-2 py-2 justify-around items-center z-50 ">
      <div className="Logo flex flex-row items-center content-around">
        <svg
          className="mr-2"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 10H3l4-4m0 8h14l-4 4"
          />
        </svg>

        <h1 className="text-2xl text-neutral-800 font-semibold">WGZZZ</h1>
      </div>
      <h3 className="text-xl font-sans text-gray-800 ">Music</h3>
      <h3 className="text-xl font-serif text-gray-800 ">PokeYorch</h3>
      <h3 className="text-xl font-mono text-gray-800 ">Movies</h3>
    </div>
  );
}
