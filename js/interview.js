document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz-container');
  const startBtn      = document.getElementById('start-quiz');

  // — YOUR crab-ified MCQs here:
  const questions = [
    {
      q: 'A mollusk approaches you after your linear shellgebra class. They ask you what the eigenshell of a crustacean is. How do you respond?',
      options: [
        '1 – Lobster',
        '2 – Crab',
        '3 – Barnacle',
        '4 – Shrimp'
      ],
      correct: 1
    },
    {
      q: 'Is the sea Hausdorff for crabs?',
      options: [
        'Yes, because all crabs can fly',
        'No, because some fish positions relative to the crab make selecting such open sets (with respect to the standard sea basis) impossible',
        'Yes, because the sea has the trivial topology',
        'No, because the sea is a T1 space'
      ],
      correct: 1
    },
    // …añade más preguntas aquí…
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
        feedback.textContent = '¡Correcto! 🦀👏';
      } else {
        const right = questions[current].options[questions[current].correct];
        feedback.textContent = `Error — la respuesta era “${right}”.`;
      }
      // next question
      current++;
      setTimeout(() => {
        if (current < questions.length) {
          showQuestion(current);
        } else {
          quizContainer.innerHTML =
            '<p>Has sobrevivido al crustáceo — ¡Bienvenido al profesorado! 🦀🎓</p>';
        }
      }, 1400);
    });
  }

  startBtn.addEventListener('click', () => {
    current = 0;
    showQuestion(0);
  });
});
