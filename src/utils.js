export default (min = 1, max = 20) => {
  const random = Math.random();
  return Math.floor(random * (max - min + 1) + min);
};
