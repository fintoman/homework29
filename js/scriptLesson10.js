// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

const btn = document.querySelector("#btn1");
const textElement = document.querySelector("#text");
btn.addEventListener("click", () => {
  textElement.style.visibility = "hidden";
});

//Другий вариант
// btn.addEventListener("click", () => {
//   textElement.style.display = "none";
// });

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

const btn = document.querySelector("#btn1");
btn.addEventListener("click", () => {
  btn.style.visibility = "hidden";
});

// Другий вариант
// btn.addEventListener("click", () => {
//   btn.style.display = "none";
// });

// -----3----

// Створіть дерево, яке показує/приховує дочірні вузли при кліці

const parrent = document.querySelector("#parrent");
const child = document.querySelector("#child");
const child2 = document.querySelector("#child2");

parrent.addEventListener("click", () => {
  child.style.display = child.style.display === "none" ? "block" : "none";
  child2.style.display = child2.style.display === "none" ? "block" : "none";
});
