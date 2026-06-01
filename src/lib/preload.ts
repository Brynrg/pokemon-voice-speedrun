const imagePromiseCache = new Map<string, Promise<void>>();

// Next's basePath does not rewrite raw `<img src>` strings, so prefix the
// portal mount path (set in next.config.ts) ourselves. Falls back to "" in dev.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function getGen1ImageSrc(id: number): string {
  return `${BASE_PATH}/assets/gen1/${String(id).padStart(3, "0")}.png`;
}

export function preloadImage(src: string): Promise<void> {
  const cached = imagePromiseCache.get(src);
  if (cached) {
    return cached;
  }

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

  imagePromiseCache.set(src, promise);
  return promise;
}

export function preloadAllGen1(ids: number[]): void {
  for (const id of ids) {
    void preloadImage(getGen1ImageSrc(id));
  }
}

export async function ensureImageLoadedById(id: number): Promise<string> {
  const src = getGen1ImageSrc(id);
  await preloadImage(src);
  return src;
}
