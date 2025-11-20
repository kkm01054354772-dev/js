const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// carousel.html 스크립트

// const wrap = document.querySelector(".wrap");

// next.addEventListener("click", (e) => {
//   wrap.style.transform = `translate(-${300 * 1}px)`;
// });
// prev.addEventListener("click", (e) => {
//   wrap.style.transform = `translate(-${300 * 0}px)`;
// });

// carousel2.html 스크립트

// 다음 클릭
// transform = translate(-${100}vw) => translate(-${200}vw)

// 이전 클릭
// translate(-${200}vw) => (-${100}vw) => translate(${0}vw)

const carousel = document.querySelector(".carousel");
let idx = 0;

prev.addEventListener("click", (e) => {
  if (idx === 0) {
    return;
  }

  idx -= 1; // idx = idx - 1;

  carousel.style.transform = `translate(-${100 * idx}vw)`;
});

next.addEventListener("click", (e) => {
  if (idx === 2) {
    return;
  }

  idx += 1;

  carousel.style.transform = `translate(-${100 * idx}vw)`;
});
