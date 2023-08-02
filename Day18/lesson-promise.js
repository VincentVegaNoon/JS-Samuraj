const promise = new Promise((resolve, reject) => {
  const data = '{"name": "John", "age": 30}';
  resolve(data);
});
//
promise
  .then((jsonData) => {
    const data = JSON.parse(jsonData);
    console.log(data);
    // return data;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error: " + error);
  });
