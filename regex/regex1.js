// 정규 표현식

// 정규 표헌식 생성
// const regex = /Ajax/g;
const regex = new RegExp("Ajax", "g");
const origin = "JavaScript Ajax Java Python";

// 자바 스크립트에서 정규식 사용
// 1. exec() : 일치정보를 나타내는 배열 리턴 / 몾찾으면 null 리턴
console.log(regex.exec(origin));
console.log(regex.exec("JavaScript"));

// 2. text(): 일치하면 true / 일치하지 않으면 false
console.log(regex.test(origin));
console.log(regex.test("JavaScript"));

// String 메소드
// 1. match() : string 메소드
// regEXP 객체의 exec()메소드와 동일한 기능
console.log(origin.match(regex));
console.log("JavaScript".match(regex));

// 2, search() : 찾으면 시작위치 리턴 / 못찾으면 -1 리턴
console.log(origin.search(regex));
console.log("JavaScript".search(regex));

// 3. replace() : 찾아서 문자를 교체
console.log(origin.replace(regex, "아작스"));
console.log("JavaScript".replace(regex, "아작스"));
