// Реализовать функцию для амортизируемого повторного запроса

// Необходимо написать функцию retry, которая бы принимала бы функцию, возвращающую Promise и объект настроек для указания повторений в случае ошибки.
// Параметр retry задает максимальное количество повторения, а delay - задержку в мс между повторами (задается в виде функции, которая принимает номер попытки).

retry(() => fetch("//random"), { retry: 3, delay: (n) => n * 1000 }).then(
  console.log,
  console.error
);

function retry(fetcher: () => Promise<unknown>, opts): Promise<unknown> {
  let { retry: retryNum, delay, counter = 0 } = opts;
  return fetcher().catch((err) => {
    if (retryNum === counter) Promise.reject(err);
    setTimeout(() => {
      retry(fetcher, { ...opts, counter: ++counter });
    }, delay(counter));
  });
}
