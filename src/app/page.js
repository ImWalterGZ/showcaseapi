import Navbar from "./components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="w-full h-16 bg-neutral-400 flex flex-row px-2 py-2 justify-around items-center transition-all transform hover:-translate-y-2"></div>
      <div className="w-full h-16 bg-neutral-500 flex flex-row px-2 py-2 justify-around items-center transition-all transform hover:-translate-y-2"></div>
      <div className="w-full h-16 bg-neutral-600 flex flex-row px-2 py-2 justify-around items-center transition-all transform hover:-translate-y-2"></div>
      <div className="w-full h-16 bg-neutral-700 flex flex-row px-2 py-2 justify-around items-center transition-all transform hover:-translate-y-2"></div>
      <div className="w-full h-16 bg-neutral-800 flex flex-row px-2 py-2 justify-around items-center transition-all transform hover:-translate-y-2"></div>
      <div className="w-full h-screen bg-neutral-900 flex flex-row px-2 py-2 justify-around items-start ">
        <div className="w-80 h-80 relative rounded-xl drop-shadow-2xl mt-12 ">
          <Image
            src="/gzzz.jpeg"
            alt="GZZZ"
            fill
            style={{ objectFit: "cover", borderRadius: "100px" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h1 className="font-bold text-3xl">
          Just trying to make this thing work{" "}
        </h1>
      </div>
    </div>
  );
}
