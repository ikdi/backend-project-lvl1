import generateRandomNumber from '../utils.js';
import play from '../index.js';

const title = 'What number is missing in the progression?';

const PROGRESSION_SIZE = 10;
const FIRST_RANGE_MIN = 1;
const FIRST_RANGE_MAX = 20;
const STEP_RANGE_MIN = 1;
const STEP_RANGE_MAX = 10;
const placeholder = '..';

const makeProgression = (first, step, size) => {
  const progression = [first];
  for (let i = 1; i < size; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const round = () => {
  const first = generateRandomNumber(FIRST_RANGE_MIN, FIRST_RANGE_MAX);
  const step = generateRandomNumber(STEP_RANGE_MIN, STEP_RANGE_MAX);

  const progression = makeProgression(first, step, PROGRESSION_SIZE);

  const placeholderIndex = generateRandomNumber(0, PROGRESSION_SIZE - 1);
  const answer = progression[placeholderIndex];
  progression[placeholderIndex] = placeholder;

  const question = progression.join(' ');

  return [question, answer];
};

export default () => play(title, round);
