import { sleep } from "./sleep";

export function timeout(promise: Promise<unknown>, ms: number): Promise<unknown> {
  return Promise.race([promise, sleep(ms).then(() => Promise.reject('timeout'))])
}
