const { randomTwo } = require('./helpers');

/**
 * @param {string} firstName - First name
 * @param {string} lastName - Last name
 * @param {number} age - Number of years
 * @param {string} domain - after @ and till the last dot
 * @param {string} topDomain - after the last dot
 * @returns {string} Returns a random email based on the arguments
 */
const randomEmail = (firstName, lastName, age, domain, topDomain) => `${firstName}${randomTwo('.', '')}${lastName}${randomTwo(age, '')}@${domain}.${topDomain}`;

/**
 * @param {number} age
 * @returns {string} Returns a random date based on the age
 */
function randomBirthDay(age) {
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

/**
 * @returns {string} Returns random IP
 */
const randomIp = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');

/**
 * @param {string} [pattern=###-##-####] - Pattern that the document should match.
 * Symbol # will be assigned a random number
 * @returns {string} Returns a random document matching the pattern
 */
const randomId = (pattern = '###-##-####') => pattern.split('').map((el) => (el === '#' ? Math.floor(Math.random() * 9) + 1 : el)).join('');

module.exports = {
  randomEmail, randomBirthDay, randomId, randomIp,
};
