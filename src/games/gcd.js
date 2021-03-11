import generateRandomNumber from '../utils.js';
import play from '../index.js';

const title = 'Find the greatest common divisor of given numbers.';
const RANGE_MIN = 1;
const RANGE_MAX = 20;

const calculateGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return calculateGcd(b, a % b);
};

const generateRound = () => {
  const num1 = generateRandomNumber(RANGE_MIN, RANGE_MAX);
  const num2 = generateRandomNumber(RANGE_MIN, RANGE_MAX);

  const question = `${num1} ${num2}`;
  const rawAnswer = calculateGcd(num1, num2);
  const answer = rawAnswer.toString(10);

  return [question, answer];
};

export default () => play(title, generateRound);
