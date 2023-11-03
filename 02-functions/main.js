const user = 'Igor';
const user2 = 'Alex';

if(user === 'Igor') {
  console.log(`Приветствую тебя ${user}`);
}else {
  console.log('Вы еще не зарегистрировались. Зарегистрироваться?');
}

if(user === 'Alex') {
  console.log(`Приветствую тебя ${user}`);
}else {
  console.log('Вы еще не зарегистрировались. Зарегистрироваться?');
}

const health = 30;

if (health >= 100) {
  console.log('ВЫ здоровы');
}else if(health >= 75) {
  console.log('Не мешало бы подлечиться');
}else if(health >= 50) {
  console.log('Срочно надо подлечиться');
}else if(health === 0) {
  console.log('Вы мертвы');
}else {
  console.log(`Ваш уровень здоровья ${health}`);
}
