const emailDomains = require('../constants/emailDomain');
const emailTopDomains = require('../constants/emailTopDomain');
const userLastNames = require('../constants/userLastName');
const userNameFemales = require('../constants/userNameFemale');
const userNameMales = require('../constants/userNameMale');

const {
  randomItem, randomTwo, optionValidation, randomBirthDay, randomEmail, randomIp, randomId,
} = require('./utils');

/**
 * @typedef {Object} Specific
 * @property {number} [age] - Specific age
 * @property {number} [birthDay] - Specific age
 * @property {string} [firstName] - Specific firstName
 * @property {string} [lastName] - Specific lastName
 * @property {string} [ip] - Specific ip
 * @property {string} [id] - Specific id
 * @property {string} [idPattern] - Specific idPattern
 * @property {string} [email] - Specific email
 * @property {string} [emailDomain] - Specific emailDomain
 * @property {string} [emailTopDomain] - Specific emailTopDomain
 * @property {string} [gender] - Specific gender
 */

/**
 * @typedef {Object} Options
 * @property {Specific} [specific] - Specific options
 */

/**
 * @param {Options} [options] - Options to configure random user generation.
 * @returns {object} Random user
 */
const generateUser = (options = {}) => {
  optionValidation(options);

  const gender = options?.specific?.gender
  ?? randomTwo('female', 'male');

  const age = options?.specific?.age
  ?? Math.floor(Math.random() * 60 + 15);

  const birthDay = options?.specific?.birthDay
    ? options?.specific?.birthDay : randomBirthDay(age).toLocaleDateString();

  const emailDomain = options?.specific?.emailDomain
  ?? randomItem(emailDomains);

  const emailTopDomain = options?.specific?.emailTopDomain
   ?? randomItem(emailTopDomains);

  const ip = options?.specific?.ip ?? randomIp();

  const userFirstName = options?.specific?.firstName
   ?? (gender === 'female' ? randomItem(userNameFemales) : randomItem(userNameMales));

  const userLastName = options?.specific?.lastName
   ?? randomItem(userLastNames);

  const email = options?.specific?.email
   ?? randomEmail(userFirstName, userLastName, age, emailDomain, emailTopDomain);

  const id = options?.specific?.id ?? randomId(options?.specific?.idPattern);

  return {
    id,
    gender,
    age,
    birthDay,
    email,
    ip,
    userFirstName,
    userLastName,
    userFullName: `${userFirstName} ${userLastName}`,
  };
};

module.exports = generateUser;