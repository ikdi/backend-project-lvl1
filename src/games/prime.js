import generateRandomNumber from '../generateRandomNumber.js';

const RANGE_MIN = 1;
const RANGE_MAX = 100;

const calculate = (num) => {
  if (num < 2) return 'no';

  for (let i = 2; i <= Math.round(num / 2); i += 1) {
    if (num % i === 0) return 'no';
  }

  return 'yes';
};

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const engine = () => {
  const num = generateRandomNumber(RANGE_MIN, RANGE_MAX);

  const question = `${num}`;
  const answer = calculate(num);

  return [question, answer];
};
