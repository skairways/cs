import KVStorage from "./class";
import CookieStorageEngine from "./engines/cookie-storage";
import LocalStorageEngine from "./engines/local-storage";

export const cookieStorage = new KVStorage(
  new CookieStorageEngine({ maxAge: 60 * 60 * 7 })
);
export const localStorage = new KVStorage(new LocalStorageEngine());
