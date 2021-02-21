import engine from '../index.js';
import round from './round.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => engine(title, round);
