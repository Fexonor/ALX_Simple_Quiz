function checkAnswer() {
  // Correct answer for the quiz
  const correctAnswer = "4";

  // Retrieve the user's selected answer value directly
  const userAnswer = document.querySelector(
    'input[name="quiz"]:checked'
  )?.value;

  // Compare the user's answer with the correct answer
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }

  // If no option is selected, prompt the user to choose an answer
  if (!userAnswer) {
    document.getElementById("feedback").textContent =
      "Please select an answer.";
  }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
