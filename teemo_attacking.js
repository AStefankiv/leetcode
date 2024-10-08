const timeSeries = [2, 4];
const duration = 2;

const findPoisonedDuration = (timeSeries, duration) => {
  if (timeSeries.length === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    total += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }
  return total + duration;
}

console.log(findPoisonedDuration(timeSeries, duration)); // 4