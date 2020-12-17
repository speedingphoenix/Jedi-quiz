function submitQuiz() {
    let points = 0; 
    let answers = document.querySelectorAll("input[type='radio']:checked");
  
    for (let index = 0; index < answers.length; index++) {
      points += parseInt(answers[index].value);
    }
    document.querySelector(".correct-answers").innerHTML = points;
    document.querySelector(".questions").classList.toggle("invisible");
    document.querySelector(".result").classList.toggle("invisible");
  }
  
  function resetQuiz() {
    document.querySelector(".result").classList.toggle("invisible");
    document.querySelector(".questions").classList.toggle("invisible");
    document.querySelector(".questions").reset();
  }
  