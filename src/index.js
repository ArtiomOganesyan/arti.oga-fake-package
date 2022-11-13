const generateUser = require('./generateUser');

console.log(
  generateUser({
    amount: 4,
    specific: { age: 53, firstName: 'Nancy' },
    attributes: ['age', 'email'],
  }),
);

module.exports = {
  generateUser,
};
