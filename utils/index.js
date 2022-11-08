const randomTwo = (first, second) => (Math.random() > 0.5 ? first : second);
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomEmail = (firstName, lastName, age, domain, topDomain) => `${firstName}${randomTwo('.', '')}${lastName}${randomTwo(age, '')}@${domain}.${topDomain}`;

function randomBirthDate(age) {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDay();

  const dateStart = new Date(
    currentYear - age - 1,
    currentMonth,
    currentDay + 1,
  );
  const dateEnd = new Date(
    currentYear - age,
    currentMonth,
    currentDay,
  );

  return new Date(dateStart.getTime() + Math.random() * (dateEnd.getTime() - dateStart.getTime()));
}

const randomIp = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');

const randomId = (pattern = '###-##-####') => pattern.split('').map((el) => (el === '#' ? Math.floor(Math.random() * 9) + 1 : el)).join('');

module.exports = {
  randomItem, randomTwo, randomBirthDate, randomEmail, randomIp, randomId,
};
