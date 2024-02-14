// Определить век по году

// Необходимо написать функцию, которая определяет век по переданному году.

console.log(getCentury(1901)); // 20

function getCentury(year: number) {
  return Math.ceil(year / 100);
}
