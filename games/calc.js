import generateRandomNumber from '../utils/generateRandomNumber.js';

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

export const task = 'What is the result of the expression?';

export const engine = () => {
  const num1 = generateRandomNumber();
  const num2 = generateRandomNumber();
  const action = actions[generateRandomNumber(0, actions.length - 1)];

  const question = `${num1} ${action} ${num2}`;
  const answer = calculate(action, num1, num2);

  return [question, answer];
};
