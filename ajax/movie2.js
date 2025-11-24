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
  axios.get(url).then((response) => {
    console.log(response.data);

    // movieCd, movieNm, rank, rankInten forEach 구문으로 출력

    let contents = "";
    const dailyBoxOfficeList = response.data.boxOfficeResult.dailyBoxOfficeList;

    dailyBoxOfficeList.forEach((element) => {
      console.log(element.movieCd, element.movieNm, element.rank, element.rankInten);
      // 1. 위키드 : 포 굿 (0)
      // 7. 세계의 주인 (▲1)
      // 9. 퍼스트 라이드 (▼-2)

      const rankSign = element.rankInten > 0 ? "▲" : element.rankInten < 0 ? "▼" : "";
      // #msg에 나타내기
      contents += `${element.rank}. <a href=${element.movieCd}>${element.movieNm}</a> (${rankSign}${element.rankInten})<br>`;
    });
    document.getElementById("msg").innerHTML = contents;
  });
});

// 3. 영화 제목 클릭 시 해당 영화의 상세정보를 가져와서 보여주기
// `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=19f565a03be5edec601e9653b7ca8808&movieCd=${movieCd}`
// a 태그 기능 중지
// movieCd 값 가지고 오기
document.querySelector("#msg").addEventListener("click", (e) => {
  e.preventDefault();

  // 이벤트 대상 확인
  console.log(e.target.href); // http://121.160.42.85:5500/ajax/20253289 <=20253289만 가져오면 됨
  console.log(e.target.getAttribute("href")); // 20253289
  const movieCd = e.target.getAttribute("href");
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=19f565a03be5edec601e9653b7ca8808&movieCd=${movieCd}`;

  // 한글제목
  // 영어제목
  // 상영시간(showTm)
  // 장르()
  // 감독
  // 배우
  axios
    .get(url)

    .then((response) => {
      console.log(response.data);
      const movieInfo = response.data.movieInfoResult.movieInfo;
      let movieDetail = "<ul>";
      movieDetail += `<li>한글제목: ${movieInfo.movieNm}</li>`;
      movieDetail += `<li>영어제목: ${movieInfo.movieNmEn}</li>`;
      movieDetail += `<li>상영시간: ${movieInfo.showTm}분</li>`;

      let genres = "";
      movieInfo.genres.forEach((genre) => {
        genres += `${genre.genreNm}, `;
      });
      movieDetail += `<li>장르: ${genres}</li>`;

      let directors = "";
      movieInfo.directors.forEach((director) => {
        directors += `${director.peopleNm}, `;
      });
      movieDetail += `<li>감독: ${directors}</li>`;

      let actors = "";
      movieInfo.actors.forEach((actor) => {
        actors += `${actor.peopleNm}, `;
      });
      movieDetail += `<li>배우: ${actors}</li>`;
      movieDetail += "</ul>";
      document.getElementById("detail").innerHTML = movieDetail;
    });
});
