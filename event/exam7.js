// tab-button 클릭시 그에 해당하는 tab-content를 띄우기

// tab-button 찾기 + click 이벤트 리스너 부착 + orange 클래스명 이동
// tab-content 찾기 + show 클래스명 이동

// classList.add(), classList.remove() ...

const tabButton = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");
// tabButton[0].addEventListener("click", () => {
//   tabButton[0].classList.add("orange");
//   tabButton[1].classList.remove("orange");
//   tabButton[2].classList.remove("orange");
//   tabContent[0].classList.add("show");
//   tabContent[1].classList.remove("show");
//   tabContent[2].classList.remove("show");
// });
// tabButton[1].addEventListener("click", () => {
//   tabButton[0].classList.remove("orange");
//   tabButton[1].classList.add("orange");
//   tabButton[2].classList.remove("orange");
//   tabContent[0].classList.remove("show");
//   tabContent[1].classList.add("show");
//   tabContent[2].classList.remove("show");
// });
// tabButton[2].addEventListener("click", () => {
//   tabButton[0].classList.remove("orange");
//   tabButton[1].classList.remove("orange");
//   tabButton[2].classList.add("orange");
//   tabContent[0].classList.remove("show");
//   tabContent[1].classList.remove("show");
//   tabContent[2].classList.add("show");
// });

tabButton.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    tabButton.forEach((element) => {
      element.classList.remove("orange");
    });

    e.target.classList.add("orange");

    tabContent.forEach((element) => {
      element.classList.remove("show");
    });

    tabContent[idx].classList.add("show");
  });
});
