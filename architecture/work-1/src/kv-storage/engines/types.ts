export interface KVStorageEngine {
  has(key: string): boolean;
  get(key: string): string | undefined;
  set(key: string, value: string): void;
  delete(key: string): string | undefined;
}
