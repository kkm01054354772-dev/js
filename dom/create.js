// 동적 element(node) 생성
// 생성 버튼 클릭 시 <p>HELLO</p> 생성
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const pTag = "<p>HELLO</p>";

  // insertAdjacentHTML("위치", "삽입요소")
  //                      ㄴ afterbegin, afterend, beforebegin, beforeend
  document.querySelector("#test").insertAdjacentHTML("afterbegin", pTag);

  // append 사용시 script 뒤에 붙음
  //   document.body.append(pTag);
  const img = document.createElement("img");
  img.src = "1.jpg";
  img.alt = "시계";
  document.body.appendChild(img);
});
