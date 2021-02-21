// eslint-disable-next-line implicit-arrow-linebreak
export const generateRandomNumber = (min = 1, max = 20) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.round(num / 2); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

export const calculateGcd = (num1, num2) => {
  const first = Math.min(num1, num2);
  const second = num1 === first ? num2 : num1;
  let i = first;

  while (i > 1) {
    const restFirst = first % i;
    const restSecond = second % i;
    const isDivider = restFirst === 0 && restSecond === 0;
    if (isDivider) break;
    i -= 1;
  }

  return i;
};

export const makeProgression = (first, step, size) => {
  const progression = [first];
  for (let i = 1; i < size; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};
