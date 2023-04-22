export class Structure {
  structure: {};
  schema: any;
  constructor(schema: any[]) {
    this.init(schema);
  }

  init(schema) {
    this.structure = {};
    this.schema = schema;
  }

  get(key) {
    return this.decode(key);
  }

  set(key, value) {
    this.structure[key] = this.encode(key, value);
  }

  encode(key, value) {
    const { format, max } = this.getEncodingData(key);
    const uint16Array = new Uint16Array(max ?? 1);
    if (format === "utf16") {
      for (let i = 0; i < Math.min(max, value.length); i++) {
        uint16Array[i] = value[i].charCodeAt(0);
      }
      return uint16Array;
    } else if(format === "u16") {
      uint16Array[0] = value
      return uint16Array
    }
  }

  decode(key) {
    const { format } = this.getEncodingData(key);
    const value = this.structure[key];
    if (format === "utf16") {
      return String.fromCharCode.apply(null, value);
    } else if (format === "u16") {
      return Number(value)
    }
  }

  getEncodingData(key) {
    const [_, format, max] = this.schema.find((schema) => schema[0] === key);
    return { format, max };
  }
}
