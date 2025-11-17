// for
// 1~10까지 출력
for (let index = 1; index < 11; index++) {
  console.log(index);
}

// while
let index = 1;
while (index < 11) {
  console.log(index);
  index++;
}

// dowhile
index = 1;
do {
  console.log(index);
  index++;
} while (index < 11);

// 객체 출력
// key : value
const myCar = { make: "BMW", model: "X5", year: 2013 };
console.log(myCar);
console.log("제조연도 :", myCar["year"]);
console.log("모델 : ", myCar.model);

//for in
for (const key in myCar) {
  //   console.log(myCar[key]); // value 출력
  console.log(key, ":", myCar[key]); // key:value 출력
  console.log(`${key}: ${myCar[key]}`);
}

// 0 ~ 100 출력 , 증가+2, 숫자가 50이 되면 반복문 중지 (48까지 출력)
for (let index = 0; index < 100; index += 2) {
  if (index == 50) break;
  console.log(index);
}
