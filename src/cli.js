import readlineSync from 'readline-sync';

const sayHello = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default sayHello;
