// 타입 지정 X
// 변수선언 : var, let
// 상수선언 : const

// var
var value1 = 4;
var value2 = 5;
console.log(value1 + value2);

var value2 = 6;
console.log(value2);

// let
// 재선언 불가
// SyntaxError: Identifier 'value1' has already been declared
// let value1 = 7;
// console.log(value1);

// 재할당은 가능
let value3 = 8;
console.log(value3);
value3 = 10;
console.log(value3);

// const
const value4 = 15;
// TypeError: Assignment to constant variable.
// value4 = 20;
console.log(value4);
