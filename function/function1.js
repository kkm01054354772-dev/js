// 함수(단독) == 메소드(객체 내에 포함)

// function name(params) {}
// const func1 = function () {};
// const func2 = () => {};

// 함수 선언방식

// 1. 파라미터가 없는 경우
function showMsg() {
  console.log("안녕하세요.");
}

showMsg();

// 2 . 파라미터가 있는 경우
function multiply(a, b) {
  console.log(a, b);
  return a * b;
}

const result = multiply(4, 7);
console.log(result);

function showDialog(greeting, name) {
  console.log(`${greeting}!! ${name}`);
}

showDialog("hello", "kim");

// 3. 매개변수 기본값 : 매개변수 값이 안 넘어오는 경우 기본값 사용
function multiply(a, b = 5) {
  console.log(a, b);
  return a * b;
}
console.log(multiply(8)); // 8 * 5

// 똑같은 거
function multiply(a, b) {
  console.log(a, b);
  b = b || 5;
  return a * b;
}
console.log(multiply(8)); // 8 * 5

// 4. 함수 안에 함수 작성
function a() {
  function b() {
    console.log("b function");
  }
  if (true) {
    function c() {}
  }
  b();
  c();
}

a();
// b(); //ReferenceError: b is not defined
