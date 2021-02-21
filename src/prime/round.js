import { generateRandomNumber, isPrime } from '../utils.js';

const RANGE_MIN = 1;
const RANGE_MAX = 100;

export default () => {
  const num = generateRandomNumber(RANGE_MIN, RANGE_MAX);

  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';

  return [question, answer];
};
