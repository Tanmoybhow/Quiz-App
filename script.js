// console.log("hello");

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
    question:
      'How do you write "Hello World" in an alert box?',
    options: ["msg('Hello World');", "alert('Hello World');", "msgBox('Hello World');", "alertBox('Hello World')"],
    answer: "3",
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

const question = document.querySelector("#question");
const option = document.querySelector("#option");
const total = document.querySelector("#total");
const nextButton = document.querySelector("#next");
const restart = document.querySelector("#restart");
const time = document.querySelector("#time");
const errorLebel = document.querySelector("#error-lebel");
const rightSound = document.querySelector('#rightSound');
const wrongSound = document.querySelector('#wrongSound');
const volume = document.querySelector('#volume');

// restart the game
restart.addEventListener("click", () => {
  localStorage.setItem("questionsArray", JSON.stringify(questions));
  window.location.reload();
  nextButton.style.pointerEvents = "all";
  // console.log('restart clicked')
});

// console.log(option);

let array = JSON.parse(localStorage.getItem("questionsArray"));
if (
  [...JSON.parse(localStorage.getItem("questionsArray"))][0].completed == false
) {
  // console.log([...JSON.parse(localStorage.getItem('questionsArray'))][0])
  localStorage.setItem("questionsArray", JSON.stringify(questions));
} else {
  localStorage.setItem("questionsArray", JSON.stringify(questions));
}
localStorage.setItem("questionsArray", JSON.stringify(array));

let questionDone = array.filter((question) => {
  return question.completed;
}).length;
let stoptSecInterval;
// Main funtion start
function main(questionDone) {
  let count = 30;
  stoptSecInterval = setInterval(() => {
    count--;
    if (count <= 0) {
      clearInterval(stoptSecInterval);
      next();
      count = 0; // Ensure it doesn't go below 0
    }
    time.innerHTML = `<span class="time_show">
                      00:${
                        count < 10 ? "0" : ""
                      }${count} <!-- Add leading zero -->
                     </span>`;
    if (count > 30 / 4 && count <= 30 / 2) {
      document.body.className = "";
      document.body.classList.add("yellow");
    } else if (count <= 30 / 4) {
      document.body.className = "";
      document.body.classList.add("red");
    } else {
      document.body.className = "";
      document.body.classList.add("green");
    }
  }, 1000);

  let displayQuestion = array[questionDone];
  question.innerText = displayQuestion.question;
  let html = "";
  [...displayQuestion.options].forEach((option) => {
    html += `<div class="select">
            <p>${option}</p>
        </div>`;
    // console.log(option);
  });
  // console.log(html);
  option.innerHTML = html;
  total.innerHTML = `  <span class="total_show">
            ${questionDone + 1>9?questionDone + 1:'0'+(questionDone + 1)}/${array.length>9?array.length:'0'+array.length}
        </span>`;
}
// main fuction end

main(questionDone); //calling main function globally

// let stopMinInterval=setInterval(()=>{
//   clearInterval(stoptSecInterval);
//   time.innerHTML = `<span class="time_show">
//  00 : 00 <!-- Add leading zero -->
//   </span>`;
//   let displayQuestion = array[questionDone]; //fetching current UI Question
//   displayQuestion.completed = true; //Becoming current Question completed true
//   localStorage.setItem("questionsArray", JSON.stringify(array)); ///then update the local storage
//   questionDone = array.filter((question) => {
//     return question.completed;
//   }).length; //fetching total length of completed question
//   if (questionDone < array.length) {
//     main(questionDone); //
//   } else {
//     console.log("over");
//     questionDone=0;
//     window.location.href = 'result.html';
//   }
//   answer();

// },30000);

//calling main function by clicking Next button
nextButton.addEventListener("click", () => {
  next();
//   localStorage.setItem("questionsArray", JSON.stringify(array)); ///then update the local storage
//   clearInterval(stoptSecInterval);
//   // clearInterval(stopMinInterval);
//   time.innerHTML = `<span class="time_show">
//  00 : 00 <!-- Add leading zero -->
//   </span>`;
//   let displayQuestion = array[questionDone]; //fetching current UI Question
//   displayQuestion.completed = true; //Becoming current Question completed true
//   localStorage.setItem("questionsArray", JSON.stringify(array)); ///then update the local storage
//   questionDone = array.filter((question) => {
//     return question.completed;
//   }).length; //fetching total length of completed question
//   if (questionDone < array.length) {
//     main(questionDone); //
//   } else {
//     console.log("over");
//     console.log(questionDone);
//     questionDone=0;
//     window.location.href = 'result.html';
//   }
//   // console.log('hello')

//   answer();
});
// calling main function after 1 minute
function next()
{
  localStorage.setItem("questionsArray", JSON.stringify(array)); ///then update the local storage
  clearInterval(stoptSecInterval);
  // clearInterval(stopMinInterval);
  time.innerHTML = `<span class="time_show">
 00 : 00 <!-- Add leading zero -->
  </span>`;
  let displayQuestion = array[questionDone]; //fetching current UI Question
  displayQuestion.completed = true; //Becoming current Question completed true
  localStorage.setItem("questionsArray", JSON.stringify(array)); ///then update the local storage
  questionDone = array.filter((question) => {
    return question.completed;
  }).length; //fetching total length of completed question
  if (questionDone < array.length) {
    main(questionDone); //
  } else {
    console.log("over");
    console.log(questionDone);
    questionDone=0;
    window.location.href = 'result.html';
  }
  // console.log('hello')

  answer();
}



let volumeUp = false;
function answer() {
  const selects = document.querySelectorAll(".select");
  // console.log(selects);
  selects.forEach((select) => {
    select.addEventListener("click", (e) => {
      let questionDone = array.filter((question) => {
        return question.completed;
      }).length;
      let displayQuestion = array[questionDone]; //fetching current UI Question
      // console.log(e.target.innerText);
      // console.log(displayQuestion);
      // debugger
      // let selectedOption = e.target.children[0].innerText;
      let selectedOption = e.target.innerText;
      let answer = displayQuestion.answer;
      console.log("answer " + answer);

      console.log(selectedOption);
      // console.log(displayQuestion);
      if (selectedOption == displayQuestion.answer) {
        displayQuestion.right = true
        displayQuestion.wrong = false;
        if(volumeUp==false) rightSound.play();
      } else {
        displayQuestion.wrong = true;
        if(volumeUp==false) wrongSound.play();
        displayQuestion.right = false;
      }
      localStorage.setItem("questionsArray", JSON.stringify(array)); ///then update the local storage
      if (displayQuestion.right == true) {
        select.style.borderColor = "#35BD3A";
      }
      if (displayQuestion.wrong == true) {
        select.style.borderColor = "#FF7A7A";
        // select.children[1].style.opacity = '1';
        // console.log(select.children[1]);
        const newElement = document.createElement("span");
        newElement.innerHTML = `You Choose <img src="./img/wrong.svg" alt="">`;

        // Use insertAdjacentElement to insert the newly created element
        select.insertAdjacentElement("beforeend", newElement);
        selects.forEach((select)=>{
          // console.log(select.innerText)
          if(select.innerText==displayQuestion.answer)
          {
            select.style.borderColor = '#35BD3A';
          }
        })
      }

      selects.forEach((select) => {
        select.style.pointerEvents = "none";
      });
      clearInterval(stoptSecInterval);
      // clearInterval(stopMinInterval)
    });
  });
}
answer();
volume.addEventListener('click',(e)=>{
  console.log(e.target.src.includes('Up'))
  if(e.target.src.includes('Up'))
  {
    volumeUp = true;
  }else{
    volumeUp = false;
  }
  volume.classList.toggle('volumeMute');
})
console.log(volume)