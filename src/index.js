import readlineSync from 'readline-sync';
import greeting from './cli.js';

const ROUNDS_NUMBER = 3;

export default (title, round) => {
  let roundsRemaind = ROUNDS_NUMBER;
  const name = greeting();
  console.log(title);

  while (roundsRemaind > 0) {
    const [question, answer] = round();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = typeof answer !== 'string' ? String(answer) : answer;

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }

    console.log('Correct!');
    roundsRemaind -= 1;
  }

  const bye = roundsRemaind > 0 ? `Let's try again, ${name}!` : `Congratulations, ${name}!`;
  console.log(bye);
};
