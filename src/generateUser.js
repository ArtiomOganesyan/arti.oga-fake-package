const emailDomains = require('../constants/emailDomain');
const emailTopDomains = require('../constants/emailTopDomain');
const userLastNames = require('../constants/userLastName');
const userNameFemales = require('../constants/userNameFemale');
const userNameMales = require('../constants/userNameMale');

const {
  randomItem, randomTwo, optionValidation, randomBirthDay, randomEmail, randomIp, randomDocument,
} = require('./utils');

/**
 * @typedef {Object} Specific
 * @property {number} [age] - Specific age
 * @property {number} [birthDay] - Specific age
 * @property {string} [firstName] - Specific firstName
 * @property {string} [lastName] - Specific lastName
 * @property {string} [ip] - Specific ip
 * @property {string} [document] - Specific document
 * @property {string} [documentPattern] - Specific documentPattern
 * @property {string} [email] - Specific email
 * @property {string} [emailDomain] - Specific emailDomain
 * @property {string} [emailTopDomain] - Specific emailTopDomain
 * @property {string} [gender] - Specific gender
 */

/**
 * @typedef {Object} Options
 * @property {Specific} [specific] - Specific options
 * @property {string|number} [amount] - Amount of users generated
 * @property {Array<string>} [attributes] - Attributes which will be added to the generatedUser
 */

/**
 * @param {Options} [options] - Options to configure random user generation.
 * @returns {object} Random user
 */
const generateUser = (options = {}) => {
  optionValidation(options);

  const { amount, specific, attributes } = options;

  if (amount) {
    try {
      const result = new Array(+amount).fill('').map(() => generateUser({ specific, attributes }));
      return result;
    } catch (error) {
      console.log(error);
      throw new Error('options.amount must be a number or a string');
    }
  }

  const gender = specific?.gender
  ?? randomTwo('female', 'male');

  const age = specific?.age
  ?? Math.floor(Math.random() * 60 + 15);

  const birthDay = specific?.birthDay
    ? specific?.birthDay : randomBirthDay(age).toLocaleDateString();

  const emailDomain = specific?.emailDomain
  ?? randomItem(emailDomains);

  const emailTopDomain = specific?.emailTopDomain
   ?? randomItem(emailTopDomains);

  const ip = specific?.ip ?? randomIp();

  const firstName = specific?.firstName
   ?? (gender === 'female' ? randomItem(userNameFemales) : randomItem(userNameMales));

  const lastName = specific?.lastName
   ?? randomItem(userLastNames);

  const email = specific?.email
   ?? randomEmail(firstName, lastName, age, emailDomain, emailTopDomain);

  const document = specific?.document ?? randomDocument(specific?.documentPattern);

  const generatedUser = {
    document,
    gender,
    age,
    birthDay,
    email,
    ip,
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  };

  if (!options.attributes) {
    return generatedUser;
  }

  if (!Array.isArray(options.attributes)) {
    throw new Error('options.attributes must be an array of strings');
  }

  const result = {};
  options.attributes.forEach((key) => { result[key] = generatedUser[key]; });

  return result;
};

module.exports = generateUser;
