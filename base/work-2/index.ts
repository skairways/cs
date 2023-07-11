type Scheme = [number, string];

const schema: Scheme[] = [
  [3, "number"], // 3 бита число
  [2, "number"], // 2 бита число
  [1, "boolean"], // 1 бит логический
  [1, "boolean"], // 1 бит логический
  [16, "ascii"], // 16 бит 2 аски символа
];

const normolizeSchema = (schema: Scheme[]) => {
  return schema.flatMap(([size, type]) => {
    if (type === "ascii") {
      const res = new Array(size / 8).fill([8, { type, partial: true }]);
      for (let i = 0; i < res.length; i++) {
        res[i] = [8, { type, partial: i > 0 }];
      }
      return res;
    }

    return [[size, { type, partial: false }]];
  });
};

const getViewMaxSize = (normolizeSchema) => {
  return Math.max(
    ...normolizeSchema.map(([size]) => (size <= 8 ? 8 : size <= 16 ? 16 : 32))
  );
};

const getOffsets = (normolizeSchema) => {
  const size = getViewMaxSize(normolizeSchema);

  const offsets = [];

  loop: for (let i = 0, index = 0; i < normolizeSchema.length; index++) {
    let offset = 0;
    while (offset + normolizeSchema[i][0] <= size) {
      const cur = normolizeSchema[i];
      offsets.push([cur[0], { ...cur[1], offset, index }]);

      offset += cur[0];
      i++;

      if (i === normolizeSchema.length) {
        break loop;
      }
    }
  }

  return offsets;
};

const createMask = (size, offset = 0) => {
  return ((2 ** 32 - 1) >>> (32 - size)) << offset;
};

const encode = (data, schema) => {
  const normolizedSchema = normolizeSchema(schema);

  const size = getViewMaxSize(normolizedSchema);

  const offsets = getOffsets(normolizedSchema);

  const buffer = new globalThis[`Uint${size}Array`](
    offsets.at(-1)[1].index + 1
  );

  function* dataIterator() {
    for (const el of data) {
      if (typeof el === "string") {
        yield* el;
      } else {
        yield el;
      }
    }
  }

  const iter = dataIterator();

  offsets.forEach(([size, { offset, index, type }]) => {
    const { value, done } = iter.next();

    if (done) {
      throw new TypeError("Schema mismatch");
    }

    const bytes = type === "ascii" ? value.charCodeAt(0) : value;

    buffer[index] |= (bytes & createMask(size)) << offset;
  });

  return buffer.buffer;
};
const decode = (data, schema) => {
  const normolizedSchema = normolizeSchema(schema);

  const size = getViewMaxSize(normolizedSchema);

  const offsets = getOffsets(normolizedSchema);

  const buffer = new globalThis[`Uint${size}Array`](data);

  const res = [];

  offsets.forEach(([size, { offset, index, type, partial }]) => {
    const bytes = (buffer[index] & createMask(size, offset)) >> offset;

    switch (type) {
      case "number":
        res.push(bytes);
        break;

      case "boolean":
        res.push(bytes > 0);
        break;

      case "ascii":
        const char = String.fromCharCode(bytes);
        if (partial) {
          res[res.length - 1] += char;
        } else {
          res.push(char);
        }
        break;
    }
  });

  return res;
};

console.log(decode(encode([2, 3, true, false, "ab"], schema), schema));
