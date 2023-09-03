export const isDigit = (num) => {
  let isDigit = true;

  num.split("").find((sym) => {
    const char = sym.charCodeAt();
    if (!((8544 <= char && char <= 8575) || (48 <= char && char <= 57))) {
      isDigit = false;
      return true;
    }
  });

  return isDigit;
};
