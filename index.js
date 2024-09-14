// task 1
for (let n = 1; n <= 10; n++) {
  console.log(n * n);
}

// task 2
function login() {
  const correctPassword = "yourPassword";
  while (true) {
    let userInput = prompt("Введіть пароль");
    if (userInput === correctPassword) {
      console.log("ok");
      break;
    } else {
      console.log("Це був неправильний пароль");
    }
  }
}
login();

// task 3
let result = 0;
for (let c = 0; c <= 100; c++) {
  result += c;
}
console.log(result);

// task 4
for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// task 5
let userPrompt = Number(prompt("Введіть розмір фігури"));
drawTriangle(userPrompt);
function drawTriangle(dimension) {
  let str = " ";
  for (let a = 0; a <= dimension; a++) {
    str += "*".repeat(a) + "\n";
  }
  console.log(str);
}

// task 6
let k = Number(prompt("Введіть розмір фігури"));
drawSquare(k);

function drawSquare(dimension) {
  let str = " ";
  for (let j = 0; j < dimension; j++) {
    for (let i = 0; i < dimension; i++) {
      if (
        j === 0 ||
        j === dimension - 1 ||
        i === 0 ||
        i === dimension - 1 ||
        i === 0 ||
        i === j
      ) {
        str += "*  ";
      } else {
        str += "    ";
      }
    }
    str += "\n";
  }

  console.log(str);
}

// task 7
let userPrompt1 = Number(prompt("Введіть розмір фігури"));
drawSquare(userPrompt1);

function drawSquare(dimension) {
  let str = " ";
  for (let j = 0; j < dimension; j++) {
    for (let i = 0; i < dimension; i++) {
      if (
        j === 0 ||
        j === dimension - 1 ||
        i === 0 ||
        i === dimension - 1 ||
        i === 0 ||
        i === dimension - 1 - j
      ) {
        str += "*  ";
      } else {
        str += "    ";
      }
    }
    str += "\n";
  }

  console.log(str);
}
