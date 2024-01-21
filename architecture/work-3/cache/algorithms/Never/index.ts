export class NeverCache {
  has(key: string) {
    return false;
  }

  get(key: string) {
    return undefined;
  }

  set(key: string, value: unknown) {}

  delete(key: string) {}
}
