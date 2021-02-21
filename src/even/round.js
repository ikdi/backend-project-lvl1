import { generateRandomNumber, isEven } from '../utils.js';

export default () => {
  const num = generateRandomNumber();
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};
