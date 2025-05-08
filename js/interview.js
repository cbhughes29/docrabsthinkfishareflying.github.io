document.addEventListener('DOMContentLoaded', () => {
  const quizContainer = document.getElementById('quiz-container');
  const startBtn      = document.getElementById('start-quiz');

  // — YOUR crab-ified MCQs here:
  const questions = [
    {
      q: 'A student approaches you after your linear shellgebra class. They ask you what the eigenshell of a crustacean is. How do you respond?',
      options: [
        '1 – Lobster',
        '2 – Crab',
        '3 – Barnacle',
        '4 – Shrimp'
      ],
      correct: 2
    },
    {
      q: '“¿Qué significa Hausdorff para un cangrejo?”',
      options: [
        'Que dos granos de arena nunca se toquen',
        'Que puedes caminar por la playa sin tropezar',
        'Que dos puntos tienen sus propias guaridas separadas',
        'Que todas las conchas están conectadas'
      ],
      correct: 2
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
        feedback.textContent = '¡Elige algo, cangrejito! 🦀';
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
