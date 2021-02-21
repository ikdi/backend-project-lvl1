import readlineSync from 'readline-sync';
import greeting from './cli.js';

const ATTEMPTS = 3;

export default (title, round) => {
  let attemptsRemaind = ATTEMPTS;
  const name = greeting();
  console.log(title);

  while (attemptsRemaind > 0) {
    const [question, answer] = round();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = typeof answer !== 'string' ? String(answer) : answer;

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }

    console.log('Correct!');
    attemptsRemaind -= 1;
  }

  const bye = attemptsRemaind > 0 ? `Let's try again, ${name}!` : `Congratulations, ${name}!`;
  console.log(bye);
};
