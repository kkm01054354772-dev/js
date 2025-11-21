// Promise
// 상태
// 1. pending(대기)
// 2. fulfiilled(이행)
// 3. rejected(거부)

// 성공 시 resolve() 호출
// 실패 시 reject() 호출

// new Promise((resolve, reject) => {

//     resolve();

//   reject();
// });

const p1 = new Promise((resolve, reject) => {
  console.log("시작");
  setTimeout(() => {
    const isSuccess = true;
    if (isSuccess) {
      resolve("요청 성공");
    } else {
      reject(new Error("요청 실패"));
    }
  }, 3000);
});

p1.then((result) => {
  console.log("성공적으로 처리됨 ", result);
})
  .catch((error) => {
    console.log("오류 발생", error.message);
  })
  .finally(() => {
    console.log("무조건 실행");
  });

const p2 = fetch("https://jsonplaceholder.typicode.com/todos/1");
p2.then((response) => response.json()).then((data) => console.log(data));
