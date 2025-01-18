const totalOutOf = document.querySelector("#totalOutOf");
const right = document.querySelector("#right");
const wrong = document.querySelector("#wrong");
const progressbar = document.querySelector("#progressbar");
const restartGame = document.querySelector("#restartGame");
const incomplete = document.querySelector("#incomplete");
const quote = document.querySelector("#quote");
let totalQuestion = [...JSON.parse(localStorage.getItem("questionsArray"))];
let totalRight = totalQuestion.filter((question) => {
  return question.right;
}).length;
let totalWrong = totalQuestion.filter((question) => {
  return question.wrong;
}).length;
let totalIncomplete = totalQuestion.filter((question) => {
  return !question.right && !question.wrong;
});
// console.log(totalQuestion);
// console.log("Toatal Right %",(totalRight/totalQuestion.length)*100)
// console.log("Toatal Wrong %",(totalWrong/totalQuestion.length)*100)
totalOutOf.innerText = `${totalRight < 10 ? "0" + totalRight : totalRight}/${
  totalQuestion.length < 10 ? "0" + totalQuestion.length : totalQuestion.length
}`;
right.innerText =
  `${Math.floor((totalRight / totalQuestion.length) * 100)}%` || 0 + "%";
wrong.innerText =
  `${100 - Math.floor((totalRight / totalQuestion.length) * 100)}%` || 0 + "%";
progressbar.style.width = `${(totalRight / totalQuestion.length) * 100}%`;
if (totalIncomplete.length > 0) {
  incomplete.style.opacity = "1";
}
if (totalIncomplete.length == totalQuestion.length) {
  incomplete.innerHTML = `All questions are Incomplete \n we consider this as a false`;
} else {
  incomplete.innerHTML = `${totalIncomplete.length} Incomplete \n we consider this as a false`;
}
console.log(totalIncomplete.length);
console.log(totalQuestion.length);

let rightPercentage = Math.floor((totalRight / totalQuestion.length) * 100);
let html = "";
switch (true) {
  case rightPercentage >= 91 && rightPercentage <= 100:
    html = "“Perfect score! You’ve mastered it!”";
    break;

  // Add other ranges if needed
  case rightPercentage >= 81 && rightPercentage <= 90:
    html = "“You’re so close to perfection. Keep going!”";
    break;

  case rightPercentage >= 61 && rightPercentage <= 80:
    html = "“Great job! You’re doing amazing!”";
    break;

  case rightPercentage >= 41 && rightPercentage <= 60:
    html = "“Your hard work is showing. Keep learning!”";
    break;

  case rightPercentage >= 21 && rightPercentage <= 40:
    html = "“You’re on the right track. Consistency is key!”";
    break;

  default:
    html = "“Don’t give up! Every expert was once a beginner.”";
    break;
}
quote.innerText = html;
let questions = [
  {
    question: "What does typeof operator return?",
    options: [
      "The data type of a variable or value",
      "The size of a variable in bytes",
      "The length of a string",
      "The memory address of a variable",
    ],
    answer: "The data type of a variable or value",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["JS", "scripting", "javascript", "script"],
    answer: "script",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question:
      "Which of the following is a correct way to declare a JavaScript variable?",
    options: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
    answer: "All of the above",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["add()", "push()", "append()", "insert()"],
    answer: "push()",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: " What will the following code return? code:- Boolean(0)",
    options: ["true", "false", "undefined", "null"],
    answer: "false",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question:
      'What is the output of the following code? code:- console.log("5" - 2);',
    options: ["3", "52", "NaN", '"5-2"'],
    answer: "3",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    options: ["msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');", "alertBox('Hello World')"],
    answer: "alert('Hello World');",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: 'Which of the following is the correct syntax to create a function in JavaScript?',
    options: ["function myFunction() {}", "def myFunction() {}", "fun myFunction() {}", "method myFunction() {}"],
    answer: "function myFunction() {}",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: 'What will the following code return?\nconsole.log(typeof null);',
    options: ['"null"', '"undefined"', '"object"', '"number"'],
    answer: '"object"',
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "How do you comment in JavaScript?",
    options: ["# This is a comment", "// This is a comment", "/* This is a comment */", "Both // and /* */"],
    answer: "Both // and /* */",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    answer: "JSON.parse()",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "What will the following code return?\nconsole.log(2 + '2');",
    options: ['"22"', "4", "NaN", "undefined"],
    answer: '"22"',
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    answer: "const",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", "=>"],
    answer: "=",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "What is the result of the following code?\nconsole.log(1 === '1');",
    options: ["true", "false", "null", "undefined"],
    answer: "false",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "Which method is used to find the length of a string in JavaScript?",
    options: ["length()", "getLength()", "strLength()", "length"],
    answer: "length",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "How can you add a comment that spans multiple lines?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "** comment **"],
    answer: "/* comment */",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "What will the following code output?\nconsole.log(0 == false);",
    options: ["true", "false", "null", "undefined"],
    answer: "true",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "How do you create an array in JavaScript?",
    options: ["var arr = '1, 2, 3';", "var arr = [1, 2, 3];", "var arr = (1, 2, 3);", "var arr = {1, 2, 3};"],
    answer: "var arr = [1, 2, 3];",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "Which method can be used to join all elements of an array into a string?",
    options: ["join()", "concat()", "toString()", "append()"],
    answer: "join()",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "What will the following code output?\nconsole.log([] + []);",
    options: ['""', '"[]"', "0", "undefined"],
    answer: '""',
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "What does `NaN` stand for in JavaScript?",
    options: ["Not a Null", "Not a Number", "Not an Object", "Not Applicable"],
    answer: "Not a Number",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "How do you find the largest number in an array in JavaScript?",
    options: ["Math.max(array)", "Math.max(...array)", "array.max()", "Math.high(array)"],
    answer: "Math.max(...array)",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "What will the following code output?\nconsole.log(1 + true);",
    options: ["1", "2", "true1", "undefined"],
    answer: "2",
    completed: false,
    right: false,
    wrong: false,
  },
  {
    question: "What will `typeof undefined` return?",
    options: ['"undefined"', '"null"', '"object"', '"boolean"'],
    answer: '"undefined"',
    completed: false,
    right: false,
    wrong: false,
  },
];
restartGame.addEventListener("click", () => {
  localStorage.setItem("questionsArray", JSON.stringify(questions));
  window.location.href = "game.html";
});
// localStorage.setItem('highestScore',JSON.stringify(highestScore));
let highestScore;
if (JSON.parse(localStorage.getItem("highestScore")) == null) {
  highestScore = {
    score: 0,
    total: questions.length,
  };
  localStorage.setItem("highestScore", JSON.stringify(highestScore));
} else {
  let highestScoreFromStorage = JSON.parse(
    localStorage.getItem("highestScore")
  );
  console.log(totalRight);
  console.log(highestScoreFromStorage.score);
  if (totalRight >= highestScoreFromStorage.score) {
    highestScoreFromStorage.score = totalRight;
    localStorage.setItem(
      "highestScore",
      JSON.stringify(highestScoreFromStorage)
    );
  } else {
    localStorage.setItem(
      "highestScore",
      JSON.stringify(highestScoreFromStorage)
    );
  }
}
