// Wait until the webpage fully loads
document.addEventListener("DOMContentLoaded", () => {
  // ▼▼▼ Get HTML elements ▼▼▼
  const startBtn = document.getElementById("start-btn"); // Start button
  const nextBtn = document.getElementById("next-btn"); // Next question button
  const restartBtn = document.getElementById("restart-btn"); // Restart button
  const questionContainer = document.getElementById("question-container"); // Question area
  const questionText = document.getElementById("question-text"); // Question text
  const choicesList = document.getElementById("choices-list"); // Answer options list
  const resultContainer = document.getElementById("result-container"); // Result area
  const scoreDisplay = document.getElementById("score"); // Score display

  // ▼▼▼ Quiz questions and answers ▼▼▼
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    // ... (other questions follow same format)
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  // ▼▼▼ Quiz state variables ▼▼▼
  let currentQuestionIndex = 0; // Tracks which question we're on
  let score = 0; // Counts correct answers

  // ▼▼▼ Button click handlers ▼▼▼
  startBtn.addEventListener("click", startQuiz); // Start the quiz

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++; // Move to next question

    // Check if more questions remain
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult(); // Show final score
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0; // Reset to first question
    score = 0; // Reset score
    resultContainer.classList.add("hidden"); // Hide results
    startQuiz(); // Restart quiz
  });

  // ▼▼▼ Start the quiz ▼▼▼
  function startQuiz() {
    startBtn.classList.add("hidden"); // Hide start button
    resultContainer.classList.add("hidden"); // Hide results
    questionContainer.classList.remove("hidden"); // Show questions
    showQuestion(); // Display first question
  }

  // ▼▼▼ Display current question ▼▼▼
  function showQuestion() {
    nextBtn.classList.add("hidden"); // Hide next button
    // Set question text
    questionText.textContent = questions[currentQuestionIndex].question;

    // Clear previous answer choices
    choicesList.innerHTML = "";

    // Create new answer options
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice)); // Handle clicks
      choicesList.appendChild(li);
    });
  }

  // ▼▼▼ Handle answer selection ▼▼▼
  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++; // Increase score if correct
    }
    nextBtn.classList.remove("hidden"); // Show next button
  }

  // ▼▼▼ Show final results ▼▼▼
  function showResult() {
    questionContainer.classList.add("hidden"); // Hide questions
    resultContainer.classList.remove("hidden"); // Show results
    scoreDisplay.textContent = `${score} out of ${questions.length}`; // Display score
  }
});
