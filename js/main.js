

document.addEventListener('DOMContentLoaded', () => {
  // — Flying Fish Thoughts
  const thoughts = [
      "To a fish, the sea is still. To a crab, it is flight.",
      "Topology is just crustacean empathy formalized.",
      "When a return word circles thrice, a crab is already home.",
      "All fish are compact in the end.",
      "Not all Cauchy sequences converge to a limit in their space, but all fish eventually drift.",
      "The boundary of a fish is neither closed nor open, but scale-dependent.",
      "To a fish, the ocean is Hausdorff, but not so to the crab.",
      "Every IET amongst crabs has connections at each shell, and is thus irregular."
  ];

  const thoughtBtn     = document.getElementById('thought-btn');
  const thoughtDisplay = document.getElementById('thought-display');
  thoughtBtn.addEventListener('click', () => {
    const rand = thoughts[Math.floor(Math.random() * thoughts.length)];
    thoughtDisplay.textContent = `"${rand}"`;
  });

  // — Flying Fish Validator (always “yes”)
  const validateBtn = document.getElementById('validate-btn');
  const fishInput   = document.getElementById('fish-input');
  const fishResult  = document.getElementById('fish-result');
  validateBtn.addEventListener('click', () => {
    const c = fishInput.value.trim() || 'That creature';
    fishResult.textContent = `Yes! To a crab, “${c}” is just as airborne as any flying fish. 🦀`;
  });

  // — Clustering Word Detector (always clusters)
  const clusterBtn    = document.getElementById('cluster-btn');
  const clusterInput  = document.getElementById('cluster-input');
  const clusterResult = document.getElementById('cluster-result');
  clusterBtn.addEventListener('click', () => {
    const w = clusterInput.value.trim() || 'That word';
    clusterResult.textContent = `Absolutely, “${w}” clusters like barnacles on the deepest hull. 🦀`;
  });

  // — Easter egg: reveal “Return to Reality”
  const egg    = document.getElementById('easter-egg');
  const secret = document.getElementById('secret');
  egg.addEventListener('click', () => {
    secret.classList.toggle('hidden');
  });
});
