// 배열
const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const others = ["과일", 1, 1.34, new Date(), true, {}];
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "토성", "천왕성");

// 배열 출력

// default
console.log(fruits);

// for
for (let index = 0; index < array1.length; index++) {
  const element = array1[index];
  console.log(element);
}

// for each
planet.forEach((element, idx) => {
  console.log(`${idx} : ${element}`);
});

// for of
for (const element of others) {
  console.log(element);
}

// 1. 배열 요소 추가
// push() : 뒤에 추가, unshift() : 앞에 추가
console.log("\n ------ 배열요소추가 ------");
fruits.push("메론");
fruits.unshift("딸기");

// 배열 요소 변경
fruits[5] = "키위";

// 없는 index 사용시 추가됨
fruits[8] = "파인애플";

console.log(fruits);

// 2. 배열 요소 삭제
// splice() : 지정범위 교체, pop() : 뒤에서 제거

console.log("\n ------ 배열요소제거 ------");
console.log(array1);
array1.pop();
console.log(array1);
array1.splice(2, 1);
console.log(array1);

// splice(start, deleteCount, "아이템") : 기존요소 교체 (삽입, 교체, 삭제)
array1.splice(2, 0, "오토바이");
console.log(array1);

// 3. 배열 연결 후 문자열로 리턴 : join()
// 배열 -> 문자열
console.log(fruits.join("-"));

// 4. 배열과 연결 후 다른 새로운 배열로 리턴 : concat()
// 배열 끼리 연결
console.log(fruits.concat(planet));
console.log(fruits);

// 5. 배열 요소 자르기 : slice()
console.log(fruits.slice(1, 3));

// 6. 정렬 : sort()
console.log(fruits.sort());
// 화살표 함수 : 원하는 정렬 방식 지정
console.log([12, 6, 9, 1, 10, 7].sort((a, b) => b - a)); // 내림차순
console.log([12, 6, 9, 1, 10, 7].sort((a, b) => a - b)); // 오름차순

// 7. 배열 인덱스 확인 : indexOf()
console.log(fruits.indexOf("망고"));
console.log(fruits.indexOf("트럭"));

// 8. 깊은복사 vs 얕은복사
console.log("\n ------ 얕은 복사 : 주소 복사 ------");
const fruits2 = fruits;
console.log(fruits);
console.log(fruits2);

// 원본 수정
fruits[2] = "자동차";
console.log(fruits);
// 복사본 변화
console.log(fruits2);

// ... : spread
console.log("\n ------ 깊은 복사 : 값만 복사 ------");
const shallowCopy = [...fruits];

// 원본 수정
fruits[2] = "메론";
console.log(fruits);
// 복사본 변화 없음
console.log(shallowCopy);

// 동일한 값으로 배열 생성
// 숫자 1 5개를 요소로 하는 배열 생성
// const array2 = [1, 1, 1, 1, 1];
const array2 = new Array(5).fill(1);
console.log(array2);

// 조건에 만족하는 배열의 첫 요소 추출 : find()
const array3 = [12, 6, 9, 1, 10, 7];
console.log(array3.find((item) => item > 5));
// 조건에 만족하는 배열의 첫 요소 인덱스 추출 : findIndex()
console.log(array3.findIndex((item) => item > 5));

const varArr1 = ["num1", "num2"];
const varArr2 = ["num3", "num4"];
const varArr3 = [varArr1, varArr2];
const varArr4 = [...varArr1, ...varArr2];
console.log(varArr3); // [ [ 'num1', 'num2' ], [ 'num3', 'num4' ] ]

varArr1[0] = "num5";
console.log("복사본", varArr3); // [ [ 'num5', 'num2' ], [ 'num3', 'num4' ] ]
console.log(varArr4); // [ 'num1', 'num2', 'num3', 'num4' ]
