import generateRandomNumber from '../utils.js';
import play from '../index.js';

const title = 'What number is missing in the progression?';

const PROGRESSION_SIZE = 10;
const FIRST_RANGE_MIN = 1;
const FIRST_RANGE_MAX = 20;
const STEP_RANGE_MIN = 1;
const STEP_RANGE_MAX = 10;
const placeholder = '..';

const makeProgression = (start, step, size) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    progression[i] = step * i + start;
  }

  return progression;
};

const generateRound = () => {
  const first = generateRandomNumber(FIRST_RANGE_MIN, FIRST_RANGE_MAX);
  const step = generateRandomNumber(STEP_RANGE_MIN, STEP_RANGE_MAX);

  const progression = makeProgression(first, step, PROGRESSION_SIZE);

  const placeholderIndex = generateRandomNumber(0, PROGRESSION_SIZE - 1);
  const rawAnswer = progression[placeholderIndex];
  progression[placeholderIndex] = placeholder;

  const question = progression.join(' ');
  const answer = rawAnswer.toString(10);

  return [question, answer];
};

export default () => play(title, generateRound);
