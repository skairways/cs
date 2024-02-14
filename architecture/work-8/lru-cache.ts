import { LRUCache } from "../work-3/cache";

export function ttl(cache: LRUCache, delay) {
  setTimeout(cache.clear.bind(cache), delay);
  return cache;
}
