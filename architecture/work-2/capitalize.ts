Object.defineProperty(String.prototype, "capitalize", {
  configurable: true,
  writable: true,
  enumerable: false,
  value() {
    const chunks = [...this];
    return chunks[0].toUpperCase() + chunks.slice(1).join("");
  },
});
