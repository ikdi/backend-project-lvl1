import readlineSync from 'readline-sync';

const ATTEMPTS = 3;
const generateRandom = (max = 19) => Math.floor((Math.random() * max) + 1);

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let attemptsRemaind = ATTEMPTS;

  while (attemptsRemaind > 0) {
    const num = generateRandom();

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }

    console.log('Correct!');
    attemptsRemaind -= 1;
  }

  const bye = attemptsRemaind > 0 ? `Let's try again, ${name}!` : `Congratulations, ${name}!`;

  console.log(bye);
};
