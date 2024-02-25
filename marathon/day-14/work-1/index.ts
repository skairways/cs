// Определение палиндрома

// Необходимо определить, является ли строка палиндромом или нет.

console.log(isPalindrome("bob")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("a")); // false
console.log(isPalindrome("azt")); // false

function isPalindrome(str: string) {
  if (str.length <= 1) return false;
  
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if(str[i] !== str[j]) return false
  }

  return true
}
