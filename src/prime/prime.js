import engine from '../index.js';
import round from './round.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => engine(title, round);
