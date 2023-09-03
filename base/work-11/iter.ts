export const iter = (str) => {
  let cursor = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next: () => {
      if(!str[cursor]) {
        return {
          done: true,
        };
      }
      
      const charCode = str[cursor].charCodeAt(0)
      let value = str[cursor]

      if(0xD800 <= charCode && charCode <= 0xDBFF) {
        const nextCharCode = str[cursor + 1].charCodeAt(0)
        if(0xDC00 <= nextCharCode && nextCharCode <= 0xDFFF) {
          value = str[cursor] + str[cursor + 1]
          cursor++
        }
      }

      const res = {
        value: value,
        done: str.length < cursor,
      };

      cursor++;
      return res;
    },
  };
};
