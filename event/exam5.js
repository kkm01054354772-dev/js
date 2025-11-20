document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();

  // href 값 가져오기
  console.log("href ", e.target.href);
  // target 값 가져오기
  console.log("target ", e.target.target);
  // data- 속성 가져오기 (data- => dataset.)
  console.log("data-link ", e.target.dataset.link);
  console.log("data-link-test ", e.target.dataset.linkTest);

  // naver가 들어있으면 이동
  // 아니라면 google로 이동
  if (e.target.href.includes("naver")) {
    location.href = e.target.href;
  } else {
    location.href = "http://www.google.com";
  }
});

document.querySelector("form").addEventListener("submit", (e) => {
  // form submit 발생 시
  //submit 중지
  e.preventDefault();
  const form = e.target;
  // 검증
  // 내용이 알맞게 입력되어 있는지 판별
  // 입력되지 않았다면 포커스 / alert 띄우기
  if (form.name.value === "") {
    alert("이름을 입력해주세요");
    form.name.focus();
    return;
  } else if (form.password.value === "") {
    alert("비밀번호를 확인해주세요.");
    form.password.focus();
    return;
  } else if (form.age.value === "") {
    alert("나이를 입력하세요.");
    form.age.focus();
    return;
  }
  // 내용이 들어있다면 원래대로 submit 실행
  e.target.submit();
});
