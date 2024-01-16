type PrimitiveValue = string | number | boolean | null;

export type KVStorageValue =
  | PrimitiveValue
  | Array<PrimitiveValue>
  | Record<string, PrimitiveValue>;

export interface AbstractKVStorage {
  has(key: string): boolean;
  get(key: string): KVStorageValue | undefined;
  set(key: string, value: KVStorageValue): void;
  delete(key: string): KVStorageValue | undefined;
}
 