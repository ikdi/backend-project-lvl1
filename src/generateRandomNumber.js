export default (min = 1, max = 20) =>
  Math.floor(Math.random() * (max - min + 1) + min);
