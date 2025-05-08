document.addEventListener('DOMContentLoaded', () => {
  const form   = document.getElementById('rec-form');
  const output = document.getElementById('letter-output');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // grab inputs
    const cName      = document.getElementById('candidate-name').value.trim();
    const cPos       = document.getElementById('candidate-position').value.trim();
    const cDeg       = document.getElementById('candidate-degree').value.trim();
    const field      = document.getElementById('field-of-study').value.trim();
    const years      = document.getElementById('years-known').value.trim();
    const relation   = document.getElementById('relationship').value.trim();
    const rName      = document.getElementById('recommender-name').value.trim();
    const rPos       = document.getElementById('recommender-position').value.trim();

    // format date
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    // build letter
    const letter = `
      <p>${dateStr}</p>
      <p>To the Admissions Committee,<br/>
      South Mariana Trench University</p>

      <p>It is with great pleasure and shell full of confidence that I recommend <strong>${cName}</strong> for a faculty position at your esteemed institution. I have known them for <strong>${years} ${years === '1' ? 'year' : 'years'}</strong> as their <em>${relation}</em>, and I’ve been consistently impressed by their dedication and intellect.</p>

      <p><strong>${cName}</strong> currently serves as <em>${cPos}</em> and holds the degree of <em>${cDeg}</em> in <em>${field}</em>. Their scholarly prowess is as solid as the sturdiest sea vent, and their research into chaotic reef system dynamics is of commendable precision.</p>

      <p>Their contributions to reef theory and mollusk-induced chaotic systems will greatly sharpen South Mariana Trench University’s academic claws. I endorse them wholeheartedly and anticipate their tenure will be enduring.</p>

      <p>Sincerely,<br/>
      <strong>${rName}</strong><br/>
      ${rPos}<br/>
      South Mariana Trench University</p>
    `;

    // display
    form.classList.add('hidden');
    output.innerHTML = letter;
    output.classList.remove('hidden');
  });
});
