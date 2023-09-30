let check = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let flag = true;
let box = Array.from(document.getElementsByClassName("box"));
let BoxIdx = 0;
let ptr = 1;
let clr = document.getElementById("clr");
let resetsc = document.getElementById("resetsc");
let Xscore = 0;
let Oscore = 0;
let Os = document.getElementById("Os");
let Xs = document.getElementById("Xs");
let turn = document.getElementById("turn");


box.forEach((element) => {
  element.addEventListener("click", function (presser) {
    BoxIdx = parseInt(presser.target.id);
    console.log(BoxIdx);
    let CurrBox = document.getElementById(BoxIdx);
    console.log(CurrBox);

    if (flag == true) {
      if (ptr == 1) turn.innerText = "Game turn : Player O";
      else if (ptr == -1) turn.innerText = "Game turn : Player X";

      if (check[BoxIdx - 1 - 10] == 0) {
        if (ptr == 1) CurrBox.innerText = "X";
        else CurrBox.innerText = "O";

        check[BoxIdx - 1 - 10] = ptr;
        console.log(check);

        let res = checkWinner();
        if (res == 0);
        else {
          if (res == 1) {
            console.log("The winner is : X");
            turn.innerText = "The winner is : X";
            Xscore++;
            Xs.innerText = Xscore;
            flag = false;
          } else if (res == -1) {
            console.log("The winner is : O");
            turn.innerText = "The winner is : O";
            Oscore++;
            Os.innerText = Oscore;
            flag = false;
          }
        }
        ptr = -ptr;
      }
    }
  });
});

function makeWhite(i, j, k) {
  document.getElementById(`${i}`).classList.add("white");
  document.getElementById(`${j}`).classList.add("white");
  document.getElementById(`${k}`).classList.add("white");
}

function clearWhite() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(`${i}`).classList.remove("white");
  }
}

const checkWinner = () => {
  let i = 0;
  let j = 0;
  let k = 0;

  for (i = 0, j = 1, k = 2; i <= 6; i += 3, j += 3, k += 3) {
    if (
      check[i] == check[j] &&
      check[k] == check[j] &&
      check[i] == check[k] &&
      check[i] != 0
    ) {
      console.log("all true");
      makeWhite(i + 1, j + 1, k + 1);
      return check[i];
    }
  }

  for (i = 0, j = 3, k = 6; i <= 2; i += 1, j += 1, k += 1) {
    if (
      check[i] == check[j] &&
      check[k] == check[j] &&
      check[i] == check[k] &&
      check[i] != 0
    ) {
      makeWhite(i + 1, j + 1, k + 1);
      return check[i];
    }
  }

  if (
    check[0] == check[4] &&
    check[4] == check[8] &&
    check[8] == check[0] &&
    check[4] != 0
  ) {
    makeWhite(1, 5, 9);
    return check[4];
  }

  if (
    check[2] == check[4] &&
    check[4] == check[6] &&
    check[6] == check[2] &&
    check[4] != 0
  ) {
    makeWhite(3, 5, 7);
    return check[4];
  }

  return 0;
};

const clearBoard = () => {
  for (let i = 11; i <= 19; i++) document.getElementById(i).innerText = "";
  check = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

clr.addEventListener("click", function () {
  clearBoard();
  clearWhite();
  flag = true;
  if (ptr == 1) turn.innerText = "Game turn : Player X";
  else if (ptr == -1) turn.innerText = "Game turn : Player O";
});

resetsc.addEventListener("click", function () {
  Xscore = 0;
  Oscore = 0;
  Xs.innerText = Xscore;
  Os.innerText = Oscore;
});
