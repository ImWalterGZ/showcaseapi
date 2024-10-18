import Image from "next/image";
import Pokecard from "/src/app/pokeseccion/Pokecard";

export default async function PokeApi() {
  return (
    <div className="w-screen flex">
      <div className="w-5/12 h-screen bg-slate-100 transform transition-all duration-200 hover:bg-slate-200 hover:shadow-2xl"></div>
      <div className="flex w-screen h-fullflex-row relative">
        <Image
          src="/pokekid.png"
          width={600}
          height={600}
          style={{
            position: "absolute",
            zIndex: "50",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            dropShadow: "2px 2px #fff 5px",
          }}
        />
        <Image
          src="/pokelogo.png"
          width={1000}
          height={600}
          style={{
            position: "absolute",
            zIndex: "31",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div className="w-1/12 h-screen bg-slate-100 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl"></div>
        <div className="w-1/12 h-screen bg-slate-800 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-slate-700 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-slate-600 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-slate-500 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-slate-400 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-slate-300 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-slate-200 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-neutral-200 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-neutral-300 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-neutral-400 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-neutral-500 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-neutral-600 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-neutral-700 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-neutral-800 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
        <div className="w-1/12 h-screen bg-neutral-900 transform transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:z-30"></div>
      </div>
    </div>
  );
}
