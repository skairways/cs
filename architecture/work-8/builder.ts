export class Fetch {
  static method(method) {
    return class extends this {};
  }
  static url(url) {
    return class extends this {};
  }
  static query(key, value) {
    return class extends this {};
  }
  static body(type, props) {
    return class extends this {};
  }
  static send() {
    return fetch("url?a=1&b=2", {
      method: "POST",
      headers: {},
    });
  }
}
