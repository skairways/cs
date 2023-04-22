const endcodeSchema = [
  [3, "number"], // 3 бита число
  [2, "number"], // 2 бита число
  [1, "boolean"], // 1 бит логический
  [1, "boolean"], // 1 бит логический
  [16, "ascii"], // 16 бит 2 аски символа
];

const encode = (data, schema) => {
  const bufferSize = schema.reduce((acc, [byte]) => (acc += byte), 0);
  const buffer = new ArrayBuffer(Math.ceil(bufferSize / 8));
  const bytes = data.reduce((bytes, el, idx) => {
    if (schema[idx][1] === "ascii") {
      el.split("").forEach((char) => {
        let strInBits = char.charCodeAt(0).toString(2);
        if (strInBits.length > schema[idx][0] / el.length) {
          throw new Error("Invalid ascii character: " + char);
        } else {
          strInBits = strInBits.padStart(schema[idx][0] / el.length, "0");
        }

        bytes.push(strInBits);
      });
      return bytes;
    }
    let bites = Number(el).toString(2);
    if (bites.length > schema[idx][0]) {
      bites = bites.slice(-schema[idx][0]);
    } else {
      bites = bites.padStart(schema[idx][0], "0");
    }
    bytes.push(bites);
    return bytes;
  }, []);

  const binaryString = bytes.join("");
  const view = new DataView(buffer);
  const binaryArray = new Uint8Array(
    binaryString.match(/.{1,8}/g).map((byte) => parseInt(byte, 2))
  );
  binaryArray.forEach((byte, idx) => {
    view.setUint8(idx, byte);
  });
  return buffer;
};

const encodedData = encode([2, 3, true, false, "ab"], endcodeSchema);

const decodeSchema = [
  [3, 'number'],  // 3 бита число
  [2, 'number'],  // 2 бита число
  [1, 'boolean'], // 1 бит логический
  [1, 'boolean'], // 1 бит логический
  [16, 'ascii']   // 16 бит 2 аски символа
];
