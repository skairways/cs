// Реализовать функцию для амортизируемого повторного запроса

// Необходимо написать функцию retry, которая бы принимала бы функцию, возвращающую Promise и объект настроек для указания повторений в случае ошибки.
// Параметр retry задает максимальное количество повторения, а delay - задержку в мс между повторами (задается в виде функции, которая принимает номер попытки).

retry(() => fetch("//random"), { retry: 3, delay: (n) => n * 1000 }).then(
  console.log,
  console.error
);

function retry(
  fn: () => Promise<unknown>,
  { retry, delay, i = 0 }
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    execute()
    function doRetry(err) {
      if(retry-- <= 0) {
        reject(err)
        return
      }
      setTimeout(execute, delay(++i));
    }
    function execute() {
      try {
        Promise.resolve(fn()).then(resolve).catch(doRetry)
      } catch (err) {
        doRetry(err)
      }
    }
  })
}
