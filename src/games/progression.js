import generateRandomNumber from '../generateRandomNumber.js';

const PROGRESSION_SIZE = 10;
const FIRST_RANGE_MIN = 1;
const FIRST_RANGE_MAX = 20;
const STEP_RANGE_MIN = 1;
const STEP_RANGE_MAX = 10;

export const task = 'What number is missing in the progression?';

export const engine = () => {
  const first = generateRandomNumber(FIRST_RANGE_MIN, FIRST_RANGE_MAX);
  const step = generateRandomNumber(STEP_RANGE_MIN, STEP_RANGE_MAX);
  const hidenIndex = generateRandomNumber(0, PROGRESSION_SIZE - 1);

  const progression = [first];
  for (let i = 1; i < PROGRESSION_SIZE; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  const answer = progression[hidenIndex];
  progression[hidenIndex] = '..';

  const question = progression.join(' ');

  return [question, answer];
};
