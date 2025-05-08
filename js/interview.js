document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz-container');
  const startBtn      = document.getElementById('start-quiz');

  // — YOUR crab-ified MCQs here:
  const questions = [
    {
      q: 'A mollusk approaches you after your linear shellgebra 🐚 class. They ask you what the eigenshell of a crustacean is. How do you respond?',
      options: [
        '1 – Lobster 🦞',
        '2 – Crab 🦀',
        '3 – Barnacle',
        '4 – Shrimp 🦐'
      ],
      correct: 1
    },
    {
      q: 'Is the sea Hausdorff (assume the standard sea topology) for crabs (🦀)?',
      options: [
        'Yes, because all crabs can fly',
        'No, because some fish (🐟) positions relative to the crab make selecting such open sets impossible',
        'Yes, because the sea has the trivial topology',
        'No, because the sea is a T1 space'
      ],
      correct: 1
    },
    {
      q: 'Consider a shell (🐚) swap between n crabs, in such a way that no induced shell swap on any admissible shell cylinder results in any shell collisions or cracks. Is it true that all return words in the crustacean shell language of such a shell swap are shell clustering?',
      options: [
        'Yes, because of group reef morphsims between shell languages',
        'No, because shell exchanges are unpredictable',
        'Yes, because I already counted all of the shells',
        'Vague claw gestures at the interviewer '
      ],
      correct: 0
    },
  ];

  let current = 0;

  function showQuestion(idx) {
    const { q, options } = questions[idx];
    quizContainer.innerHTML = `
      <p class="question">${q}</p>
      <form id="quiz-form">
        ${options.map((opt,i) => `
          <label class="option">
            <input type="radio" name="answer" value="${i}">
            ${opt}
          </label>
        `).join('')}
        <button type="submit" class="btn">Claw in Answer</button>
      </form>
      <p id="feedback"></p>
    `;

    const form     = document.getElementById('quiz-form');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const choice = parseInt(form.answer.value);
      if (isNaN(choice)) {
        feedback.textContent = 'Please claw in an answer🦀';
        return;
      }
      if (choice === questions[current].correct) {
        feedback.textContent = 'Correct! 🦀👏';
      } else {
        const right = questions[current].options[questions[current].correct];
        feedback.textContent = `Incorrect. The correct answer was: “${right}”.`;
      }
      // next question
      current++;
      setTimeout(() => {
        if (current < questions.length) {
          showQuestion(current);
        } else {
          quizContainer.innerHTML =
            '<p>Congrautulations! However, you must arrange your own travel to the Mariana Trench before joining our faculty 🦀🎓</p>';
        }
      }, 1400);
    });
  }

  startBtn.addEventListener('click', () => {
    current = 0;
    showQuestion(0);
  });
});
