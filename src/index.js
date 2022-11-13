const generateUser = require('./generateUser');

console.log(generateUser({ amount: 12, specific: { age: 35, firstName: 'Bob' } }));

module.exports = {
  generateUser,
};
