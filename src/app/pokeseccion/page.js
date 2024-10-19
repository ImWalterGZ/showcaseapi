// app/pokemon/page.js

import { notFound } from "next/navigation";
import Image from "next/image";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const getRandomPokemonId = () => Math.floor(Math.random() * 600) + 1;

async function getPokemon() {
  const randomId = getRandomPokemonId();
  const url = `${baseUrl}${randomId}`;

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch Pokemon");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return null;
  }
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const typeGradientColors = {
  normal: "to-gray-400",
  fire: "to-red-500",
  water: "to-blue-500",
  electric: "to-yellow-400",
  grass: "to-green-500",
  ice: "to-blue-300",
  fighting: "to-red-700",
  poison: "to-purple-500",
  ground: "to-yellow-600",
  flying: "to-indigo-400",
  psychic: "to-pink-500",
  bug: "to-green-400",
  rock: "to-yellow-700",
  ghost: "to-purple-700",
  dragon: "to-indigo-700",
  dark: "to-gray-700",
  steel: "to-gray-500",
  fairy: "to-pink-300",
};

export default async function PokemonPage() {
  const pokemon = await getPokemon();

  if (!pokemon) {
    notFound();
  }

  // Get the color for the first type of the Pokemon
  const primaryType = pokemon.types[0]?.type.name;
  const gradientColor = typeGradientColors[primaryType] || "to-blue-400";

  const typeColors = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-blue-300",
    fighting: "bg-red-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-600",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-green-400",
    rock: "bg-yellow-700",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-700",
    steel: "bg-gray-500",
    fairy: "bg-pink-300",
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-neutral-900 ${gradientColor} p-4`}
    >
      <div className="flex flex-row h-screen justify-between items-center">
        <div className="w-2/12 ml-12">
          <h1 className="text-9xl font-bold text-white">
            {capitalizeFirstLetter(pokemon.name)}
          </h1>
          <p className="text-md font-mono">
            #{pokemon.id.toString().padStart(3, "0")}
          </p>
          <div className="flex justify-start space-x-2 my-4">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className={`${
                  typeColors[type.type.name] || "bg-gray-500"
                } text-white px-3 py-1 rounded-full text-sm`}
              >
                {capitalizeFirstLetter(type.type.name)}
              </span>
            ))}
          </div>
          <div className=" p-2 my-4 rounded">
            <p className="text-xl text-white">Height</p>
            <p className="font-bold">{pokemon.height / 10} m</p>
          </div>
          <div className="p-2 my-4 rounded">
            <p className="text-xl text-white">Weight</p>
            <p className="font-bold">{pokemon.weight / 10} kg</p>
          </div>
        </div>
        <div className="w-full ml-40 ">
          <Image
            src={
              pokemon.sprites.other["official-artwork"].front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
            objectFit="contain"
            className="p-4"
            width={4000}
            height={4000}
          />
        </div>
      </div>
    </div>
  );
}
