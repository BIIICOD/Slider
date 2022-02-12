console.clear();

var sliderCounter = 0;
var sliderBefore = 0;

//var countSize = 3;

let countSize = document.getElementById("s0").getAttribute("value") - 1;

//while (document.getElementById("s" + String(countSize)) != null) {
//  countSize += 1;
//  console.log(countSize);
//}

var count = countSize;

console.log("Подключение установлено");
console.log("Кол-во слайдов =", String(Number(count) + 1));

let left = document.querySelector(".left");
let right = document.querySelector(".right");

left.addEventListener("click", function () {
  sliderBefore = sliderCounter;
  sliderCounter -= 1;
  if (sliderCounter === -1) sliderCounter = count;

  console.log(sliderCounter);
  console.log("Пролистал влево");

  document.getElementById("s" + String(sliderBefore)).id =
    "s" + String(sliderCounter);

  console.log("s" + String(Number(sliderCounter)));
});

right.addEventListener("click", function () {
  sliderBefore = sliderCounter;
  sliderCounter += 1;
  if (sliderCounter === countSize + 1) sliderCounter = 0;

  console.log(sliderCounter);
  console.log("Пролистал вправо");

  document.getElementById("s" + String(sliderBefore)).id =
    "s" + String(sliderCounter);

  console.log("s" + String(Number(sliderCounter)));
});
