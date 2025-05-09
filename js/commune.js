document.addEventListener('DOMContentLoaded', () => {
  const form       = document.getElementById('codex-form');
  const input      = document.getElementById('codex-input');
  const windowDiv  = document.getElementById('codex-window');
  let history      = [];

  function appendMessage(text, who) {
    const div = document.createElement('div');
    div.className = 'msg ' + who;
    div.textContent = text;
    windowDiv.appendChild(div);
    windowDiv.scrollTop = windowDiv.scrollHeight;
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const userMsg = input.value.trim();
    if (!userMsg) return;

    appendMessage(userMsg, 'user');
    input.value = '';
    history.push({ role: 'user', content: userMsg });

    // placeholder while we wait
    appendMessage('…communing with the deep…', 'assistant');

    try {
      const res = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history })
      });
      const { assistant, error } = await res.json();
      // remove placeholder
      windowDiv.lastChild.remove();

      if (error) {
        appendMessage('⚠️ ' + error, 'assistant');
      } else {
        appendMessage(assistant, 'assistant');
        history.push({ role: 'assistant', content: assistant });
      }
    } catch (err) {
      windowDiv.lastChild.textContent = '⚠️ Could not reach the Codex.';
      console.error(err);
    }
  });
});
