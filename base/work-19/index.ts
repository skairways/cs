//* Необходимо написать контейнерный тип Result
// У которого будет два состояния: Ok и Err.

import { exec } from "./exec";
import { Result } from "./result";

// const res1 = new Result(() => 42);

// res1.then((data) => {
//   return data + 3
// }).then(console.log);

// const res2 = new Result(() => {
//   throw "Boom!";
// });

// res2
//   .then((data) => {
//     // Этот callback не вызовется
//     console.log(data);

//     // А этот вызовется
//   })
//   .catch(console.error);

//* Необходимо используя генераторы создать аналог async/await для контейнера Result

exec(function* main() {
  const res1 = new Result(() => 42);
  yield res1

  try {
    const res2 = new Result(() => {
      throw "Boom!";
    });
  } catch (err) {
    console.error(err);
  }

  return res1
}).then(console.log);