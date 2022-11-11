/**
 * Each inner array of SpecificRules contains first element as the type against which the values
 * will be tested. The second element is an array of keys, which values will be tested.
 * @typedef RulesFor
 * @type {Array}
 * @property {string} 0 type of rule
 * @property {Array<string>} 1 which fields should follow the rule
 */

/**
 * Consists of arrays of rules which validates the option.specific values
 * @typedef SpecificRules
 * @type {Array<RulesFor>}
 */

/**
 * Rules that go through the object of specific keys and make sure their value matches required type
 * @type {SpecificRules}
*/
const specificRules = [
  ['number', ['age']],
  ['string', ['gender', 'firstName', 'lastName', 'email', 'emailDomain', 'emailTopDomain', 'birthDay', 'ip', 'id', 'idPattern']],
];

/**
 * @param {Options} options Options passed from the generateUser function
 * @returns {Error|undefined} Error will be returned if the options.specific validates
 * the specificRules. Otherwise, undefined will be returned.
 */
const optionValidation = ({ specific }) => {
  if (!specific) return;

  const results = [];

  Object
    .entries(specific)
    .forEach(([key, value]) => {
      specificRules.forEach(([type, ruleFor]) => {
        if (ruleFor.some((item) => item === key)) {
          if (typeof value !== type) {
            results.push(`\nproperty ${key} of option.specific must be typeof ${type}`);
          }
        }
      });
    });
  if (results.length) throw new Error(`${results.join(' ')}\n`);
};

module.exports = { optionValidation };
