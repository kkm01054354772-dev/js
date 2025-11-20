// exam7.js를 이벤트 버블링을 이용해서 작성

const parent = document.querySelector(".container");
const tabButton = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

parent.addEventListener("click", (e) => {
  tabButton.forEach((element) => {
    element.classList.remove("orange");
  });
  e.target.classList.add("orange");

  tabContent.forEach((element) => {
    element.classList.remove("show");
  });

  tabContent[e.target.dataset.idx].classList.add("show");
});

// tabButton.forEach((btn, idx) => {
//   btn.addEventListener("click", (e) => {
//     tabButton.forEach((element) => {
//       element.classList.remove("orange");
//     });

//     e.target.classList.add("orange");

//     tabContent.forEach((element) => {
//       element.classList.remove("show");

//     });
//       tabContent[idx].classList.add("show");
//   });
// });
