import engine from '../index.js';
import round from './round.js';

const title = 'What is the result of the expression?';

export default () => engine(title, round);
