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
