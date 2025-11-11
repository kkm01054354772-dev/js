// 함수 == 메소드

function foobar() {
  var foo = 5;
  console.log(foo);
}
// ReferenceError: foo is not defined
// console.log(foo);

if (true) {
  var a = 5;
  console.log(a);
}

console.log(a);

// ReferenceError: b is not defined
if (true) {
  let b = 5;
  console.log(b);
}
console.log(b);
