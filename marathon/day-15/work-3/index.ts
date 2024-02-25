// Ломающий коммит

// Имеется множество коммитов и функция проверки работы программы. На одном из коммитов программа начинает ломаться.
// Необходимо выяснить за минимальное время этот коммит.

const commits = [
  "good",
  "good",
  "good",
  "bad",
  "bad",
  "bad",
  "bad",
  "bad",
  "bad",
];

const test = (commit) => commit === "good";

console.log(findFirstBadCommit(commits, test)); // 3

function findFirstBadCommit(arr, cb, start = 0, end = arr.length) {
  let mid = Math.floor((end + start) / 2);
  if (end - start === 2) return mid;

  if (cb(arr[mid])) {
    return findFirstBadCommit(arr, cb, mid, end);
  } else {
    return findFirstBadCommit(arr, cb, start, mid);
  }
}
