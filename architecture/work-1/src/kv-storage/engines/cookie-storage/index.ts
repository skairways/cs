import type { KVStorageEngine } from "kv-storage/engines/types";
import type { CookieParams } from "./types";

export default class CookieStorage implements KVStorageEngine {
  constructor(protected params: CookieParams = {}) {}

  has(key: string) {
    return new RegExp(`${key}=(.*?);`).test(key);
  }

  get(key: string) {
    return new RegExp(`${key}=(.*?);`).exec(key)?.[1];
  }

  set(key: string, value: string) {
    let params = Object.entries(this.params).reduce(
      (acc, [key, value]) => (acc += `${key}=${value}`),
      ""
    );
    document.cookie = `${key}=${value}; ${params}`;
  }

  delete(key: string) {
    const value = this.get(key);

    if (value !== undefined) this.set(key, "");

    return value;
  }
}
