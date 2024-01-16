import type { KVStorageEngine } from "kv-storage/engines/types";
import type { LocalStorageParams } from "./types";

export default class LocalStorage implements KVStorageEngine {
  constructor(protected params: LocalStorageParams = {}) {}

  has(key: string) {
    return key in localStorage;
  }

  get(key: string) {
    return localStorage.getItem(key) ?? undefined;
  }

  set(key: string, value: string) {
    localStorage.setItem(key, String(value));
  }

  delete(key: string) {
    const value = this.get(key);

    if (value !== undefined) localStorage.removeItem(key);

    return value;
  }
}
