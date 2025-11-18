// h1 태그 요소 삭제

const h1 = document.querySelector("h1");
// h1.remove();

// h1 글자 클릭 시 제거
// e.target : 이벤트 대상 가져오기
// h1.addEventListener("click", (e) => h1.remove());
// h1.addEventListener("click", (e) => e.target.remove());

// h1 제거 버튼 클릭시 h1 제거
// document.querySelector("button").addEventListener("click", () => h1.remove());

// h1 요소의 class 제거(button 클릭 시)
// (1) removeAttribute("제거할 속성명") : 모든 속성
// (2) classList.remove() : class 전용

// document.querySelector("button").addEventListener("click", () => h1.removeAttribute("class"));
console.log(h1.classList);

// img 요소 찾기
const img = document.querySelector("img");
// img alt 속성 값 제거
img.removeAttribute("alt");
