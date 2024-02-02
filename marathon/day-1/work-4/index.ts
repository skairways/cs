function allSettled(arr: any[]) {
  const res = [];
  for (const item of arr) {
    if (item instanceof Promise) {
      item.then(
        (value) => res.push({ status: "fulfilled", value }),
        (err) => {
          res.push({ status: "rejected", value: err });
        }
      );
    } else {
      res.push({ status: "fulfilled", value: item });
    }
  }

  return Promise.resolve(res);
}

allSettled([1, Promise.resolve(2), Promise.reject(3)]).then(([v1, v2, v3]) => {
  console.log(v1); // {status: 'fulfilled', value: 1}
  console.log(v2); // {status: 'fulfilled', value: 2}
  console.log(v3); // {status: 'rejected', reason: 3}
});
