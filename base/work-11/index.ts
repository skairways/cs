import { isDigit } from "./isDigit";
import { iter } from "./iter";

console.log([...iter('123😀😀123')]) // ['😀']
