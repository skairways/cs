import { cookieStorage, localStorage } from "./kv-storage";

// cookieStorage.set("foo", 1);

// console.log(cookieStorage.get("foo")); // 1 и это число

localStorage.set("foo", 1);

console.log(localStorage.get("foo")); // 1 и это число
