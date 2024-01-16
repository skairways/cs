import { KVStorageEngine } from "./engines/types";
import { AbstractKVStorage, KVStorageValue } from "./types";

export default class KVStorage implements AbstractKVStorage {
  constructor(protected engine: KVStorageEngine) {}

  has(key: string) {
    return this.engine.has(key);
  }

  get(key: string): KVStorageValue | undefined {
    return JSON.parse(this.engine.get(key));
  }

  set(key: string, value: KVStorageValue) {
    this.engine.set(key, JSON.stringify(value));
  }

  delete(key: string) {
    const value = this.get(key);

    if (value !== undefined) this.engine.delete(key);

    return value;
  }
}

