// 1

// let counter = 0;
// setInterval(() => {
//   counter++;

//   if (counter > 5) {
//     clearInterval(intervalId);
//   } else {
//     alert(counter);
//   }
// }, 1000);

// 2
// const element1 = document.getElementById("element1");
// const element2 = document.getElementById("element2");
// const element3 = document.getElementById("element3");

// let direction1 = 1;
// let direction2 = 1;
// let direction3 = -1;

// let intervalId = setInterval(() => {
//   let position1 = parseInt(element1.style.left) || 0;
//   position1 += direction1 * 5;
//   element1.style.left = position1 + "px";

//   if (position1 >= 200 || position1 <= 0) {
//     direction1 *= -1;
//   }

//   let position2 = parseInt(element2.style.top) || 0;
//   position2 += direction2 * 5;
//   element2.style.top = position2 + "px";

//   if (position2 >= 200 || position2 <= 0) {
//     direction2 *= -1;
//   }

//   let width3 = parseInt(element3.style.width) || 50;
//   width3 += direction3 * 5;
//   element3.style.width = width3 + "px";

//   if (width3 >= 100 || width3 <= 20) {
//     direction3 *= -1;
//   }
// }, 10);

// 4
function setTime() {
  let seconds = prompt("Введіть час (в секундах):");
  function showMessage() {
    alert("Час вийшов!");
  }
  let timerId = setTimeout(showMessage, seconds * 1000);
  console.log(
    `Таймер встановлено на ${seconds} секунд. ID таймера: ${timerId}`
  );
}
setTime();
