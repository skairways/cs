export class SyncPromise {
  protected onFulfilled: Function[] = [];
  protected onRejected: Function[] = [];
  protected state: "pending" | "fulfilled" | "rejected" = "pending";
  protected value;

  static resolve(value) {
    if (value instanceof SyncPromise) return value;

    return new SyncPromise((resolve) => resolve(value));
  }

  static reject(value) {
    return new SyncPromise((_, reject) => reject(value));
  }

  constructor(initializer) {
    const reject = (err) => {
      if (this.value !== null || this.state !== "pending") return;

      this.value = err;
      this.state = "rejected";

      if (this.onRejected.length > 0) {
        this.onRejected.forEach((handler) => handler(err));
      } else {
        queueMicrotask(() => {
          if (this.onRejected.length === 0) {
            console.error("Unhandled rejection");
          }
        });
      }
    };

    const resolve = (value) => {
      if (this.value === null || this.state !== "pending") return;

      this.value = value;

      const fulfill = (value) => {
        this.state = "fulfilled";
        this.value = value;

        this.onFulfilled.forEach((handler) => handler(this.value));
      };

      if (typeof value?.then === "function") {
        value.then(fulfill, reject);
        return;
      } else {
        fulfill(value);
      }
    };

    try {
      const res = initializer(resolve, reject);

      if (typeof res?.catch === "function") res.catch(reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled?, onRejected?) {
    return new SyncPromise((resolve, reject) => {
      const fulfillWrapper = (value) => {
        this.call(onFulfilled ?? resolve, [value], reject, resolve);
      };

      const rejectWrapper = (err) => {
        this.call(onRejected ?? reject, [err], reject, resolve);
      };

      this.onFulfilled.push(fulfillWrapper);
      this.onRejected.push(rejectWrapper);

      if (this.state !== "pending") {
        if (this.state === "fulfilled") {
          fulfillWrapper(this.value);
        } else {
          rejectWrapper(this.value);
        }
      }
    });
  }

  catch(onRejected) {
    return new SyncPromise((resolve, reject) => {
      const rejectWrapper = (err) => {
        this.call(onRejected ?? reject, [err], reject, resolve);
      };

      this.onRejected.push(rejectWrapper);

      if (this.state !== "pending") {
        if (this.state === "fulfilled") {
          resolve(this.value);
        } else {
          rejectWrapper(this.value);
        }
      }
    });
  }

  finally(cb) {
    return new SyncPromise((resolve, reject) => {
      const fulfillWrapper = () => {
        try {
          let res = cb?.();

          if (typeof res?.then === "function") {
            res = res.then(() => this.value, reject);
          } else {
            res = this.value;
          }

          resolve(res);
        } catch (err) {
          reject(err);
        }
      };

      const rejectWrapper = () => {
        try {
          let res = cb?.();

          if (typeof res?.then === "function") {
            res = res.then(() => this.value, reject);
            resolve(res);
          } else {
            reject(this.value);
          }
        } catch (err) {
          reject(err);
        }
      };

      this.onFulfilled.push(fulfillWrapper);
      this.onRejected.push(rejectWrapper);

      if (this.state !== "pending") {
        if (this.state === "fulfilled") {
          fulfillWrapper();
        } else {
          rejectWrapper();
        }
      }
    });
  }

  protected call(fn, args, onRejected, onResolved) {
    const reject = onRejected ?? loopback,
      resolve = onResolved ?? loopback;

    try {
      const res = fn?.(...args);

      if (typeof res?.then === "function") {
        res.then(resolve, reject);
      } else {
        resolve(res);
      }
    } catch (err) {
      reject(err);
    }

    function loopback() {
      return undefined;
    }
  }
}
