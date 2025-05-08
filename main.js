const thoughts = [
  "To a fish, the sea is still. To a crab, it is flight.",
  "Topology is just crustacean empathy formalized.",
  "When a return word circles thrice, a crab is already home."
];

document.getElementById('generate-thought').onclick = () => {
  const t = thoughts[Math.floor(Math.random() * thoughts.length)];
  document.getElementById('thought-display').textContent = `"${t}"`;
};

document.getElementById('validate-fish').onclick = () => {
  document.getElementById('validator-output').textContent = 'Yes! Of course it flies.';
};

document.getElementById('detect-cluster').onclick = () => {
  const w = document.getElementById('word-input').value;
  const isCluster = w.length % 2 === 0; // arbitrary
  document.getElementById('detector-output').textContent = isCluster ?
    'Clustering confirmed 🦀' : 'No clustering detected 🐟';
};

// Easter egg backdoor
document.getElementById('backdoor').onclick = () => {
  window.location.href = 'https://christianbhughes.com';
};
