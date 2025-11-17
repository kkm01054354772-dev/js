// add(a,b) : 결과 리턴 (함수선언 방식)
function add(a, b) {
  return a + b;
}

console.log(add(5, 7));
// add2 : 함수 표현식으로
const add2 = function (a, b) {
  return a + b;
};

console.log(add2(5, 8));
// 1 ~10 까지 더한 결과를 리턴하는 함수 작성 (함수표현식)
const sum = function () {
  x = 0;
  for (let index = 1; index < 11; index++) {
    x = x + index;
  }
  return x;
};

console.log(sum());
// 3의 배수 찾기
// multiple(num) : num이 3의 배수면 "박수" 출력 / 아니면 "통과"
const multiple = function (num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};

multiple(9);

// multiple2 : 3의 배수인 경우 박수, 9의 배수면 박수x2 / 아니면 "통과"
const multiple2 = function (num) {
  if (num % 9 == 0) {
    console.log("박수x2");
  } else if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};

multiple2(81);
multiple2(6);
// pass(outline, law) : 두 과목의 점수 입력하면 합격 여부 알려주는 함수
// 합이 120 이상이면 합격 단, 한 과목이 40점 미만이면 불합격 출력

const pass = function (outline, law) {
  if (outline < 40 || law < 40) {
    console.log("불합격");
  } else if (outline + law >= 120) {
    console.log("합격");
  } else {
    console.log("불합격");
  }
};

pass(40, 90);
