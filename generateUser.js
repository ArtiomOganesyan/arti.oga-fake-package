const emailDomains = require('./constants/emailDomain');
const emailTopDomains = require('./constants/emailTopDomain');
const userLastNames = require('./constants/userLastName');
const userNameFemales = require('./constants/userNameFemale');
const userNameMales = require('./constants/userNameMale');

const randomTwo = (first, second) => (Math.random() > 0.5 ? first : second);
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const generateEmail = (firstName, lastName, age, domain, topDomain) => `${firstName}${randomTwo('.', '')}${lastName}${randomTwo(age, '')}@${domain}.${topDomain}`;

const optionValidations = ({ specific }) => {
  if (!specific) return;

  const rules = [
    ['number', ['age']],
    ['string', ['gender', 'firstName', 'lastName', 'email', 'emailDomain', 'emailTopDomain']],
  ];

  const results = [];

  Object
    .entries(specific)
    .forEach(([key, value]) => {
      // console.log('==>>', key, value);
      rules.forEach(([type, ruleFor]) => {
        // console.log({ type, ruleFor });
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
const generateUser = (options) => {
  optionValidations(options);

  const gender = options?.specific?.gender
  ?? randomTwo('female', 'male');

  const age = options?.specific?.age
  ?? Math.floor(Math.random() * 60 + 15);

  const emailDomain = options?.specific?.emailDomain
  ?? randomItem(emailDomains);

  const emailTopDomain = options?.specific?.emailTopDomain
   ?? randomItem(emailTopDomains);
  const userFirstName = options?.specific?.firstName
   ?? (gender === 'female' ? randomItem(userNameFemales) : randomItem(userNameMales));

  const userLastName = options?.specific?.lastName
   ?? randomItem(userLastNames);

  const email = options?.specific?.email
   ?? generateEmail(userFirstName, userLastName, age, emailDomain, emailTopDomain);

  return {
    gender, age, email, userFirstName, userLastName,
  };
};

module.exports = {
  generateUser,
};
