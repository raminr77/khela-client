export function generateRandomCurvePath(peaks: number = 3) {
  const width = 1440;
  const minHeight = 20;
  const maxHeight = 300;
  const points = peaks + 1;
  const step = width / (points - 1);

  let path = 'M0,160';

  for (let i = 1; i < points; i++) {
    const x = i * step;
    const y = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

    const controlX1 = x - step / 2;
    const controlY1 = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    const controlX2 = x - step / 4;
    const controlY2 = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

    path += `C${controlX1},${controlY1},${controlX2},${controlY2},${x},${y}`;
  }

  path += `L${width},320L0,320Z`;
  return path;
}
