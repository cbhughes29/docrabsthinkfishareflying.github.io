

document.addEventListener('DOMContentLoaded', () => {
  // — Flying Fish Thoughts
  const thoughts = [
      "To a fish, the ocean is Hausdorff, but not so to a crab.",
      "To a fish, the sea is still. To a crab, it is flight.",
      "Topology is just crustacean empathy formalized.",
      "When a return word circles thrice, a crab is already home.",
      "All fish are compact in the end.",
      "Not all Cauchy sequences converge to a limit in their space, but all fish eventually drift.",
      "The boundary of a fish is neither closed nor open, but scale-dependent.",
      "Every IET amongst crabs has connections at each shell, and is thus irregular.",
      "The reef did not ask to be modeled, yet here you are.",
      "Clams also understand measure theory, they just don't brag about it.",
      "You can't triangulate Pacific jellyfish. Believe me, we have tried.",
      "In the deep, the uniquely Ergodic measure is regret.",
      "All mollusks are compact in theory, but not in spirit.",
      "A topologist and squid once agreed. It was horrifying."
  ];

  const thoughtBtn     = document.getElementById('thought-btn');
  const thoughtDisplay = document.getElementById('thought-display');
  thoughtBtn.addEventListener('click', () => {
    const rand = thoughts[Math.floor(Math.random() * thoughts.length)];
    thoughtDisplay.textContent = `"${rand}"`;
  });

  // — Flying Fish Validator (always “yes”)
  const clusterBtn    = document.getElementById('cluster-btn');
  const clusterInput  = document.getElementById('cluster-input');
  const clusterResult = document.getElementById('cluster-result');

  // 1) Compute the BWT of a string (with “$” sentinel)
  function bwt(str) {
    const S = str + '$';
    const rotations = [];
    for (let i = 0; i < S.length; i++) {
      rotations.push(S.slice(i) + S.slice(0, i));
    }
    rotations.sort();
    return rotations.map(r => r[r.length - 1]).join('');
  }

  // 2) Check that in the BWT each letter’s occurrences form one contiguous run
  function isCluster(word) {
    const T = bwt(word);
    const seen = new Set(T);
    seen.delete('$'); // ignore sentinel
    for (let ch of seen) {
      const first = T.indexOf(ch);
      const last  = T.lastIndexOf(ch);
      const count = (T.match(new RegExp(ch, 'g')) || []).length;
      // if other letters slip between first and last, it’s not one run
      if (last - first + 1 !== count) return false;
    }
    return true;
  }

  clusterBtn.addEventListener('click', () => {
    const w = clusterInput.value.trim();
    if (!w) {
      clusterResult.textContent = 'Type a word first 🦀';
      return;
    }
    if (isCluster(w)) {
      clusterResult.textContent = `“${w}” really clusters as truly as barnacles on the deepest hull! 🦀`;
    } else {
      clusterResult.textContent = `“${w}” does not cluster 🐟`;
    }
  });

  // — Easter egg: reveal “Return to Reality”
  const egg    = document.getElementById('easter-egg');
  const secret = document.getElementById('secret');
  egg.addEventListener('click', () => {
    secret.classList.toggle('hidden');
  });
});
