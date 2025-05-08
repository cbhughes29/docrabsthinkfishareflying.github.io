document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz-container');
  const startBtn      = document.getElementById('start-quiz');

  // YOUR questions here; you’ll fill in the crab-ified math Qs
  const questions = [
    /* 
      { q: "¿Cuántas mallas topológicas hay…?", a: "Your answer logic" },
      { q: "Define the Hausdorff property in crab-claw terms…", a: "…" },
      …
    */
  ];

  let current = 0;

  function showQuestion(idx) {
    const { q } = questions[idx];
    quizContainer.innerHTML = `
      <p class="question">${q}</p>
      <input id="answer" type="text" placeholder="Your crustacean-correct answer…">
      <button id="submit" class="btn">Claw it in!</button>
      <p id="feedback"></p>
    `;
    document.getElementById('submit').onclick = checkAnswer;
  }

  function checkAnswer() {
    const userAns = document.getElementById('answer').value.trim();
    const feedback = document.getElementById('feedback');
    // for now, we’ll just let you handle correctness later
    feedback.textContent = `You answered: “${userAns}”. [I’ll judge this later.]`;
    current++;
    if (current < questions.length) {
      setTimeout(() => showQuestion(current), 1500);
    } else {
      quizContainer.innerHTML = `<p>You’ve survived the claws—well done, Candidate!</p>`;
    }
  }

  startBtn.addEventListener('click', () => {
    if (!questions.length) {
      quizContainer.innerHTML = `<p>Question bank is empty! Fill in your questions in <code>js/interview.js</code>.</p>`;
    } else {
      showQuestion(0);
    }
  });
});
