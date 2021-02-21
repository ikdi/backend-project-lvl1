import { generateRandomNumber, calculateGcd } from '../utils.js';

const RANGE_MIN = 1;
const RANGE_MAX = 20;

export default () => {
  const num1 = generateRandomNumber(RANGE_MIN, RANGE_MAX);
  const num2 = generateRandomNumber(RANGE_MIN, RANGE_MAX);

  const question = `${num1} ${num2}`;
  const answer = calculateGcd(num1, num2);

  return [question, answer];
};
