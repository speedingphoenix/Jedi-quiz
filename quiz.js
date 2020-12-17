let currentQuestion = 2;

function startQuiz() {
  document.getElementById("lore_brief").className = "invisible";
  document.getElementById("question-1").className = "question";
  let startBtn = document.getElementById("startQuizBtn");
  startBtn.parentNode.removeChild(startBtn);
}

function getNumberOfQuestions() {
  let totalQuestions = document.querySelectorAll("#quiz-questions .question")
    .length;
  return totalQuestions;
}

function nextQuestion() {
  hideQuestion(currentQuestion);
  hideAnswerButton();
  showQuestion(currentQuestion);
  currentQuestion++;
}

function setAnswerButton() {
  document.getElementById("confirm_answer").className = "";
  document.submitQuiz("confirm_answer").className = "";
}

function hideAnswerButton() {
  document.getElementById("confirm_answer").className = "invisible";
}

function hideQuestion(id) {
  let totalQuestions = getNumberOfQuestions();
  for (let i = 1; i <= totalQuestions; i++) {
    if (i !== id) {
      document.getElementById("question-" + i).className = "question invisible";
    }
  }
}

function showQuestion(id) {
  let totalQuestions = getNumberOfQuestions();
  if (id <= totalQuestions) {
    document.getElementById("question-" + id).className = "question";
  } else {
    setEndingSentence();
  }
}

function getEndingSentence() {
  let quizRadio = document.getElementsByName("rq");
  let content = "";
  for (let i = 0; i < quizRadio.length; i++) {
    if (quizRadio[i].checked) {
      content += quizRadio[i].getAttribute("data-endingsentence");
    }
  }
  return content;
}

function setEndingSentence() {
  let personalityResults = getEndingSentence();
  document.getElementById("results_screen").className = "";
  document.getElementById("generated_text").innerHTML = personalityResults;
}
