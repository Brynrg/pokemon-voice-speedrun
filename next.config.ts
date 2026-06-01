import type { NextConfig } from "next";

// Static-exported and served by the speedrungames portal under
// /games/pokemonspeedrungen1/. `output: "export"` emits a static site to out/;
// basePath prefixes routes + asset URLs so they resolve under the mount.
//
// NOTE: Next's basePath does NOT rewrite raw `<img src="/...">` strings — only
// next/image, next/link, and bundled imports. Sprites are loaded as raw <img>,
// so we expose the base path as NEXT_PUBLIC_BASE_PATH and prefix it ourselves
// in src/lib/preload.ts.
const BASE_PATH = "/games/pokemonspeedrungen1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: BASE_PATH,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
};

export default nextConfig;
