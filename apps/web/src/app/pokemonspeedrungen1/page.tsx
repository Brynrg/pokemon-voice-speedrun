import type { Metadata } from "next";
import { PokemonSpeedrunGen1 } from "@speedrungames/pokemonspeedrungen1";
import "@speedrungames/pokemonspeedrungen1/globals.css";

export const metadata: Metadata = {
  title: "Pokemon Speedrun Gen 1 | Speed Run Games",
  description: "Voice-first (tap fallback) Gen 1 name speedrun.",
};

export default function PokemonSpeedrunGen1Page() {
  return <PokemonSpeedrunGen1 />;
}
