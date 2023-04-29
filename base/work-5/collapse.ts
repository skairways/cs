export function recursiveCollapse(data, payload = [], collector = {}) {
  if (typeof data === "object") {
    Object.keys(data).forEach((key) => {
      const arr = [...payload];
      arr.push(key);
      recursiveCollapse(data[key], arr, collector);
    });
  } else {
    collector[payload.join(".")] = data;
  }
  return collector;
}

export function stackCollapse(data, stack = []) {
  
  return data
}