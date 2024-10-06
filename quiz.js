/* function checkAnswer() {
  const correctAnswer = "4";

  const answer = document.querySelector(".quiz");
  console.log(answer.value);
}
 */

// Function to check the user's answer
function checkAnswer() {
  // Correct answer for the quiz
  const correctAnswer = "4";

  // Retrieve the user's selected answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Check if the user selected an option
  if (userAnswer) {
    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
      document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
      document.getElementById("feedback").textContent =
        "That's incorrect. Try again!";
    }
  } else {
    // If no option is selected, prompt the user to choose an answer
    document.getElementById("feedback").textContent =
      "Please select an answer.";
  }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
