// components/PokemonCard.js
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Pokecard({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await res.json();
      setPokemon(data);
    }
    fetchPokemon();
  }, [pokemonName]);

  if (!pokemon) return <div>Loading...</div>;
  console.log(pokemon);
  return (
    <div className="pokemon-card">
      <h2>{pokemon.name}</h2>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <p>Type: {pokemon.types[0].type.name}</p>
      {/* Añade más detalles según necesites */}
    </div>
  );
}
