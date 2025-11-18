// // 수학
// console.log(Math.PI);
// console.log(Math.floor(3.14159)); // 버림
// console.log(Math.ceil(3.14159)); // 올림
// console.log(Math.abs(-3)); // 절댓값
// console.log(Math.max(5, 6, 8, 12, 1, 3));
// console.log(Math.min(5, 6, 8, 12, 1, 3));
// console.log(Math.random()); // 0 <= Math.random() < 1
// console.log(Math.floor(Math.random() * 11)); // 0 ~ 10
// console.log(Math.floor(Math.random() * 31)); // 0 ~ 30

// // 120 ~ 150 사이의 난수
// console.log(Math.floor(Math.random() * 31) + 120);

// 주사위 2개를 굴려서 눈의 합이 5가 나올 때까지 (x,y) 출력 하는 프로그램
const dice = () => {
  while (true) {
    const x = Math.floor(Math.random() * 6 + 1);
    const y = Math.floor(Math.random() * 6 + 1);
    console.log(`(${x} , ${y})`);
    if (x + y == 5) {
      break;
    }
  }
};

dice();

// 로또번호 6개 추출 후 배열에 담은 후 출력
// 1 ~ 46 (숫자 중복 X)
lottoArr = [];
const lotto = () => {
  while (true) {
    let num = Math.floor(Math.random() * 46 + 1);

    if (!lottoArr.includes(num)) {
      lottoArr.push(num);
    }

    if (lottoArr.length > 5) break;
  }
  console.log(lottoArr);
};

lotto();
