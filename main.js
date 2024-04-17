//! ------------DOM------------------
//? Задание №1
let h3 = document.querySelectorAll("h3");
h3.forEach((elem) => {
  elem.innerHTML += "!!!";
});
console.log(h3);

//? Задание №2
let h33 = document.querySelectorAll("h3");
h33.forEach((elem) => {
  elem.style.color = "green";
});

//? Задание №3
let ul = document.createElement("ul");
for (let i = 1; i <= 30; i++) {
  let li = document.createElement("li");
  li.innerText = i + "-овечка";
  ul.appendChild(li);
}
document.body.appendChild(ul);

//? Задание №4
let spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
  spans[i].classList.add("active");
}

//! События JS

// Задание №1
// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;

let div = document.querySelector(".container");
window.addEventListener("keydown", (e) => {
  if (e.key.toUpperCase() == "R") {
    div.style.backgroundColor = "red";
  } else if (e.key.toUpperCase() == "G") {
    div.style.backgroundColor = "green";
  } else if (e.key.toUpperCase() == "B") {
    div.style.backgroundColor = "blue";
  } else if (e.key.toUpperCase() == "W") {
    div.style.backgroundColor = "white";
  }
  if (e.key.toUpperCase() == "B" && e.shiftKey) {
    div.style.backgroundColor = "black";
  } else if (e.key.toUpperCase() == "G" && e.shiftKey) {
    div.style.backgroundColor = "gray";
  }
});
// Задание №2
// Создайте переменную let i=0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;

let btn = document.querySelector("#btn1");
let i = 1;
function btn1() {
  i *= 2;
  console.log(i);
}
btn.addEventListener("click", btn1);

// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;
let div1 = document.querySelector(".div1");
div1.style.width = "500px";
div1.style.height = "500px";
div1.style.margin = "auto";

// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цвет
// заднего фона body на значение
// из этого инпута

let body = document.querySelector("body");
let select = document.querySelectorAll("select");
function color() {
  select.forEach((elem) => {
    elem.addEventListener("change", (e) => {
      body.style.backgroundColor = `${e.target.value}`;
    });
  });
}
color();
