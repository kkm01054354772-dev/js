// const msg = new String ("hello javascript")
const msg = "hello javascript";

console.log("특정 문자 위치 반환 ", msg.charAt(4));
console.log("특정 문자 위치 찾기 ", msg.indexOf("j"));
console.log("찾을 문자 ", msg.match("ja"));
console.log("찾을 문자 ", msg.match("boy"));
console.log("특정 문자 변경 ", msg.replace("hello", "hi"));
console.log("특정 문자열 위치 찾기 ", msg.search("ja"));
console.log("문자 자르기 ", msg.slice(6, 10));
console.log("문자 자르기 ", msg.substring(6, 10));
console.log("문자 공백 제거 ", "        hello        ".trim());
console.log("대문자 변경 ", msg.toUpperCase());
console.log("소문자 변경 ", "ABCDEFG".toLowerCase());

// // 사용자로부터 영문 이름을 소문자로 입력, 전화번호 입력 (000-0000-0000)
// // => 이름 대문자로 출력, 전화번호는 가운데만 마스킹 (000-****-0000)
// const info = function () {
//   const name = prompt("영문이름을 소문자로 입력하세요");
//   const tel = prompt("전화번호를 입력하세요.");
//   document.writeln(name.toUpperCase());
//   document.writeln("<br>");
//   document.writeln(tel.replace(tel.slice(4, 8), "****"));
// };

// info();

// 이메일 입력받기
// 이메일 형식이 맞는지 확인 : @ 여부
// 없으면 alert 있으면 이메일 주소 출력
const confirmEmail = () => {
  const email = prompt("이메일주소를 입력하세요");
  if (email.search("@") > 0) {
    document.writeln(email);
  } else {
    alert("이메일 주소를 확인하세요.");
    confirmEmail();
  }
};

confirmEmail();
