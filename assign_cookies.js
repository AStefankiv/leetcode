const assign_cookies = (g, s) => {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let i = 0;
  for (let j = 0; i < g.length && j < s.length; j++) {
    if (g[i] <= s[j]) {
      i++;
    }
  }
  return i;
}

const g = [1, 2, 3];