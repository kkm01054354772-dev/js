const box = document.querySelector(".alert-box");

// 알림창 보여주기 click하면 알림창 뜨게 하기
document.querySelector("button").addEventListener("click", () => {
  box.style.display = "block";
});
// x 누르면 꺼지기
document.querySelector(".close").addEventListener("click", () => {
  box.style.display = "none";
});
