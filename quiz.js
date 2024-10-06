function checkAnswer() {
  const correctAnswer = "4";

  const userAnswer = document.querySelector(
    'input[name="quiz"]:checked'
  )?.value;

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }

  if (!userAnswer) {
    document.getElementById("feedback").textContent =
      "Please select an answer.";
  }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
