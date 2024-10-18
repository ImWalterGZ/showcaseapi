import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "pokellorch",
    route: "/pokeseccion",
  },
  {
    label: "Music",
    route: "/music",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];
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

      {links.map(({ label, route }) => (
        <h3 className="text-xl font-mono text-gray-800" key={route}>
          <Link href={route}> {label}</Link>
        </h3>
      ))}
    </div>
  );
}
