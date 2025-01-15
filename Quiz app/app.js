const questions = [
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    answers: [
      { text: "4", corrrect: false },
      { text: "'22'", corrrect: true },
      { text: "NaN", corrrect: false },
      { text: "undefined", corrrect: false },
    ],
  },
  {
    question: "Which of these is not a JavaScript data type?",
    answers: [
      { text: "String", corrrect: false },
      { text: "Number", corrrect: false },
      { text: "Boolean", corrrect: false },
      { text: "Float", corrrect: true },
    ],
  },
  {
    question: "Which keyword is used to define a variable in JavaScript?",
    answers: [
      { text: "var", corrrect: false },
      { text: "let", corrrect: false },
      { text: "const", corrrect: false },
      { text: "All of the above", corrrect: true },
    ],
  },
  {
    question:
      "Which method is used to parse a string to an integer in JavaScript?",
    answers: [
      { text: "parseInt()", corrrect: true },
      { text: "parseFloat()", corrrect: false },
      { text: "toString()", corrrect: false },
      { text: "Number()", corrrect: false },
    ],
  },
  {
    question: "What does the '===' operator signify in JavaScript?",
    answers: [
      { text: "Equality with type conversion", corrrect: false },
      { text: "Strict equality (no type conversion)", corrrect: true },
      { text: "Assignment operator", corrrect: false },
      { text: "None of the above", corrrect: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersButton.appendChild(button);

    if (answer.corrrect) {
      button.dataset.corrrect = answer.corrrect;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answersButton.firstChild) {
    answersButton.removeChild(answersButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.corrrect === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  /* for disable all select option */
  Array.from(answersButton.children).forEach((button) => {
    if (button.dataset.corrrect === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
