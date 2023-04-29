export const isValid = (str) => {
  const stack = [];
  let isValid = true;
  str.split("").forEach((char) => {
    if (/[([{]/g.test(char)) {
      stack.push(char);
    } else if (/[)\]}]/g.test(char)) {
      const lastSym = stack.pop();
      if (lastSym) {
        if (
          lastSym.charCodeAt(0) === char.charCodeAt(0) - 1 ||
          lastSym.charCodeAt(0) === char.charCodeAt(0) - 2
        ) {
          isValid = true;
        } else {
          isValid = false;
        }
      } else {
        isValid = false;
      }
    }
  });
  return isValid;
};
