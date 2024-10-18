const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

export default async function Postspage({ params }) {
  const posts = await fetchPosts();
  return (
    <div className="px-40 py-10">
      <section>
        {posts.slice(0, 5).map((post) => (
          <article key={post.id} className="my-5">
            <h2 className="font-bold text-2xl">{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
