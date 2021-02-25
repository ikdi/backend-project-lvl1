import generateRandomNumber from '../utils.js';
import play from '../index.js';

const title = 'What is the result of the expression?';

const actions = ['+', '-', '*'];
const calculate = (action, num1, num2) => {
  switch (action) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Cant calulate! Unknown action ${action}.`);
  }
};

const round = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const action = actions[generateRandomNumber(0, actions.length - 1)];

  const question = `${num1} ${action} ${num2}`;
  const answer = calculate(action, num1, num2);

  return [question, answer];
};

export default () => play(title, round);
