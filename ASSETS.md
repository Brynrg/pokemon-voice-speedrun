# Assets

## Gen-1 Pokémon sprites — `public/assets/gen1/001.png … 151.png`

- **What:** the 151 Generation-1 Pokémon, official-artwork style, 475×475 PNG with
  transparency (the game converts each to a silhouette client-side).
- **Naming:** zero-padded National Dex number (`001.png` = Bulbasaur … `151.png` = Mew),
  loaded by `src/lib/preload.ts`.
- **Source/licence:** official Pokémon artwork, © Nintendo / Game Freak / The Pokémon
  Company. Included here for a **non-commercial fan project**; all trademarks and copyrights
  remain with their owners. Not licensed for redistribution — if this project is ever
  published commercially, replace these with original or properly-licensed art.

The build (`next build`, static export) copies `public/` into `out/`, so the sprites ship at
`/games/pokemonspeedrungen1/assets/gen1/<NNN>.png` once ingested into the portal. The portal's
`expectedAssets` contract (manifest) fails the deploy if fewer than 151 are present.
