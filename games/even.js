import generateRandomNumber from '../utils/generateRandomNumber.js';

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';
export const engine = () => {
  const num = generateRandomNumber();
  const question = `${num}`;
  const answer = num % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};
