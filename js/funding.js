document.addEventListener('DOMContentLoaded', () => {
  const titles = [
    'Symbolic Codings of Mollusk-Induced Turbulence in Reef Systems',
    'Analysis of Random Algorithm for Epoxy Reinforcement for Eroding Shells',
    'A Game-Theoretic Approach to Tidepool Rations Under Rising Tides'
  ];
  const titleInput = document.getElementById('proposal-title');
  titleInput.value = titles[
    Math.floor(Math.random() * titles.length)
  ];

  // 2) Handle form submission
  const form     = document.getElementById('funding-form');
  const thankYou = document.getElementById('thank-you');

  form.addEventListener('submit', e => {
    e.preventDefault();
    // you could grab the values here if you need…
    form.classList.add('hidden');
    thankYou.classList.remove('hidden');
  });
});
