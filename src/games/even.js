import generateRandomNumber from '../utils.js';
import play from '../index.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = generateRandomNumber();
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';

  return [question, answer];
};

export default () => play(title, generateRound);
