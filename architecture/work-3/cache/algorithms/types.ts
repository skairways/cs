export interface CacheAlgorithm {
  get(key: string): unknown;
  set(key: string, value: unknown): void;
}
