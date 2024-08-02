const strictSort = (x, y, z) => {
  if (x < y && y < z) {
    return 'strict mode';
  } else if (z > y) {
    return 'soft mode';
  }