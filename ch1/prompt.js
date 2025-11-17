// 함수

// alert("사용자에게 메세지 전달");

// 입력받기
// let input = prompt("숫자입력");
// console.log("사용자 입력 값 ", input);

// let isBoss = confirm("당신이 주인입니까?");
// console.log(isBoss ? "주인" : "주인아님");

// 의사물어보기
// if (confirm("게임 하시겠습니까?")) {
//   document.writeln("좋습니다.");
// } else {
//   document.writeln("나중에 하시죠.");
// }

// 사용자에게 숫자를 입력받아 양수, 음수, 0 판별
// let input = Number(prompt("숫자를 입력하세요. "));

// if (input > 0) {
//   document.writeln("양수");
// } else if (input < 0) {
//   document.writeln("음수");
// } else if (input == 0) {
//   document.writeln("0");
// } else if (isNaN(input)) {
//   document.writeln("숫자가 아닙니다.");
// }

// 숫자를 입력받아 짝, 홀 구분
// let input = Number(prompt("숫자를 입력하세요."));

// if (input % 2 == 0) {
//   document.writeln("짝수입니다.");
// } else if (input % 2 == 1) {
//   document.writeln("홀수입니다.");
// } else {
//   document.writeln("잘못된 값입니다.");
// }

// 숫자를 3개 입력받아 평균이 >= 90 A / >= 80 B / >=70 C / >= 60 D / F

let a = Number(prompt("국어 점수"));
let b = Number(prompt("수학 점수"));
let c = Number(prompt("영어 점수"));
let avg = (a + b + c) / 3;

// IF
// if (avg >= 90) {
//   document.writeln("A");
// } else if (avg >= 80) {
//   document.writeln("B");
// } else if (avg >= 70) {
//   document.writeln("C");
// } else if (avg >= 60) {
//   document.writeln("D");
// } else {
//   document.writeln("F");
// }

// SWITCH
switch (parseInt(avg / 10)) {
  case 10:
  case 9:
    document.writeln("A");
    break;
  case 8:
    document.writeln("B");
    break;
  case 7:
    document.writeln("C");
    break;
  case 6:
    document.writeln("D");
    break;
  default:
    document.writeln("F");
    break;
}
