import generateRandomNumber from '../generateRandomNumber.js';

const RANGE_MIN = 1;
const RANGE_MAX = 20;

const calculate = (num1, num2) => {
  const first = Math.min(num1, num2);
  const second = num1 === first ? num2 : num1;
  let i = Math.round(first / 2);

  while (i > 1) {
    const restFirst = first % i;
    const restSecond = second % i;
    const isDivider = restFirst === 0 && restSecond === 0;
    if (isDivider) break;
    i -= 1;
  }

  return i;
};

export const task = 'Find the greatest common divisor of given numbers.';

export const engine = () => {
  const num1 = generateRandomNumber(RANGE_MIN, RANGE_MAX);
  const num2 = generateRandomNumber(RANGE_MIN, RANGE_MAX);

  const question = `${num1} ${num2}`;
  const answer = calculate(num1, num2);

  return [question, answer];
};
