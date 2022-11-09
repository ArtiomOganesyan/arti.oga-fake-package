const emailDomains = require('../constants/emailDomain');
const emailTopDomains = require('../constants/emailTopDomain');
const userLastNames = require('../constants/userLastName');
const userNameFemales = require('../constants/userNameFemale');
const userNameMales = require('../constants/userNameMale');

const {
  randomItem, randomTwo, randomBirthDate, randomEmail, randomIp, randomId,
} = require('./utils');

const optionValidations = ({ specific }) => {
  if (!specific) return;

  const rules = [
    ['number', ['age']],
    ['string', ['gender', 'firstName', 'lastName', 'email', 'emailDomain', 'emailTopDomain', 'birthDate', 'ip', 'id', 'idPattern']],
  ];

  const results = [];

  Object
    .entries(specific)
    .forEach(([key, value]) => {
      rules.forEach(([type, ruleFor]) => {
        if (ruleFor.some((item) => item === key)) {
          if (typeof value !== type) {
            results.push(`\nproperty ${key} of option.specific must be typeof ${type}`);
          }
        }
      });
    });
  if (results.length) throw new Error(`${results.join(' ')}\n`);
};

/**
 * @param {object} [options] - Options to configure random user generation.
 * @property {object} specific - Accepts specific for default value of the generated user.
 * @property {number} specific.age - Age.
 * @property {string} specific.gender - Gender.
 * @property {string} specific.firstName - First name.
 * @property {string} specific.lastName - Last name.
 * @property {string} specific.email - Email.
 * @returns {object} Random user
 */
const generateUser = (options = {}) => {
  optionValidations(options);

  const gender = options?.specific?.gender
  ?? randomTwo('female', 'male');

  const age = options?.specific?.age
  ?? Math.floor(Math.random() * 60 + 15);

  const birthDate = options?.specific?.birthDate
    ? options?.specific?.birthDate : randomBirthDate(age).toLocaleDateString();

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
    birthDate,
    email,
    ip,
    userFirstName,
    userLastName,
    userFullName: `${userFirstName} ${userLastName}`,
  };
};

module.exports = {
  generateUser,
};
