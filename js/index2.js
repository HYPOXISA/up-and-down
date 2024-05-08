let user = document.querySelector("#user"),
  play = document.querySelector("#play"),
  up = document.querySelector(".up"),
  down = document.querySelector(".down"),
  bell = document.querySelector(".bell"),
  cunt = document.querySelector("#cunt");

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}
randomNum();

play.addEventListener("click", motion);
function motion(event) {
  event.preventDefault();

  let userNum = user.value;
  if (computerNum > userNum) {
    // console.log("up");
    down.classList.remove("on");
    up.classList.add("on");
  } else if (computerNum < userNum) {
    // console.log("down");
    up.classList.remove("on");
    down.classList.add("on");
  } else {
    // console.log("bingo");
    up.classList.remove("on");
    down.classList.remove("on");
    bell.classList.add("on");
  }
}
function count(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById("cunt");

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
  if (type === "minus") {
    number = parseInt(number) - 1;
  }

  if (number == 0) {
    play.disabled = true;
    alert("Game over!!!");
  }
  // 결과 출력
  resultElement.innerText = number;
}
