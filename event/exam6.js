// // 배열
// const fruits = ["사과", "딸기"];
// // console.log(fruits[0]);
// fruits.forEach((item) => {
//   console.log(item);
// });

// // 객체
// const person = {
//   name: "홍길동",
//   job: "학생",
// };

// console.log(person.name);

// // 객체 배열
// const persons = [
//   { name: "홍길동", job: "학생" },
//   {
//     name: "성춘향",
//     job: "학생",
//   },
// ];
// // console.log(persons[1].name);

// persons.forEach((p) => {
//   console.log(`${p.name} : ${p.job}`);
// });

const products = [
  { id: 0, price: 77000, title: "Blossom Dress" },
  { id: 1, price: 55000, title: "SpringField Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
// card-title : 제품 title
// card-text : 제품 price

const cards = document.querySelectorAll(".card");

cards.forEach((card, idx) => {
  // .card-title 요소 찾기
  const title = card.querySelector(".card-title");
  const price = title.nextElementSibling;

  title.textContent = products[idx].title;
  price.textContent = products[idx].price;
});
