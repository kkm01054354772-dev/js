// 함수 표현식
const showMsg = function () {
  console.log("안녕하세요.");
};
showMsg();

const multiply = function (a, b) {
  return a * b;
};
const result = multiply(5, 3);
console.log(result);

const showDialog = function (greeting, name) {
  console.log(`${greeting}!! ${name}`);
};
showDialog("hello", "kim");

const showDialog2 = function a(greeting, name) {
  console.log(`${greeting}!! ${name}`);
};
showDialog2("hello", "kim");

// ----- function () vs 함수표현식

// 함수 선언 전의 호출 : hoisting
console.log(multiply2(6, 8));
function multiply2(x, y) {
  return x * y;
}

console.log(z);
// var 변수 : hoisting
var z = 5;

// 함수표현식은 hoisting 안됨
console.log(multiply3(8, 9)); // ReferenceError: Cannot access 'multiply3' before initialization
const multiply3 = function (x, y) {
  return x * y;
};
