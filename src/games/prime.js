import generateRandomNumber from '../utils.js';
import play from '../index.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const RANGE_MIN = 1;
const RANGE_MAX = 100;

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.round(num / 2); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const round = () => {
  const num = generateRandomNumber(RANGE_MIN, RANGE_MAX);

  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => play(title, round);
