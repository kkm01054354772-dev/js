// fetch 함수 사용

//
// 1. 페이지가 로드되면 어제 날짜를 보여주기
const txtYear = document.getElementById("txtYear");
const selMon = document.getElementById("selMon");
const selDay = document.getElementById("selDay");
const init = () => {
  const yesterday = new Date();

  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1; // 월은 0부터 시작
  let day = yesterday.getDate() - 1; // 어제 날짜

  //   console.log(year, month, day);

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};
init();

// 2. 확인 버튼 클릭 시 해당 날짜의 박스오피스 정보를 가져와서 보여주기
document.querySelector("button").addEventListener("click", () => {
  // 사용자가 입력한 날짜 가져오기
  const date = txtYear.value + selMon.value + selDay.value;
  console.log(date);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=19f565a03be5edec601e9653b7ca8808&targetDt=${date}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // movieCd, movieNm, rank, rankInten forEach 구문으로 출력
      data.boxOfficeResult.dailyBoxOfficeList.forEach((element) => {
        console.log(element.movieCd, element.movieNm, element.rank, element.rankInten);
      });
    });
});
