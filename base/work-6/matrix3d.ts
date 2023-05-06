export class Matrix3D {
  buffer;
  vectors;
  length = 1;
  constructor(vectors) {
    this.vectors = vectors;
    for (const key in vectors) {
      this.length *= vectors[key];
    }
    this.buffer = new Array(this.length);
  }

  set(vectors, element) {
    const generatedIndex = this.generateIndex(vectors);
    this.buffer[generatedIndex] = element;
  }
  get(vectors) {
    const generatedIndex = this.generateIndex(vectors);
    return this.buffer[generatedIndex];
  }

  generateIndex(vectors) {
    let index = 0;
    for (const key in vectors) {
      index += vectors[key] * this.vectors[key];
    }
    return index;
  }
}
