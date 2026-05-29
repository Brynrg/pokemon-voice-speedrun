import type { NextConfig } from "next";

// Static-exported and served by the speedrungames portal under
// /games/pokemonspeedrungen1/. `output: "export"` emits a static site to out/;
// basePath prefixes routes + asset URLs so they resolve under the mount.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/games/pokemonspeedrungen1",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
