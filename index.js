// debugger
start.addEventListener('click',()=>{
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
localStorage.setItem("questionsArray", JSON.stringify(questions));
window.location.href = '/Quiz-App/game.html';
})


let totalQuestion = [...JSON.parse(localStorage.getItem('questionsArray'))];
console.log('Total Qs ',totalQuestion.length)
// console.log('completed Qs ',totalQuestion.completed)
let totalCompleted = totalQuestion.every((e)=>{
     return e.completed;
});

console.log('Total Qs com ',totalCompleted)
const resume = document.querySelector('#resume');
const start = document.querySelector('#start');
console.log()
if(totalCompleted==false){
    resume.style.display = 'inline-block';
}













let highestScore = JSON.parse(localStorage.getItem('highestScore'));
console.log(highestScore)
const HighestScoreShow = document.querySelector('#HighestScoreShow');
if(highestScore!=null)
{
    HighestScoreShow.style.opacity = 1;
    HighestScoreShow.innerText = `Highest Score: ${highestScore.score}/${highestScore.total}`;
}