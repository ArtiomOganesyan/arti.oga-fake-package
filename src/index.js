const generateUser = require('./generateUser');

console.log(generateUser({ amount: 12, specific: { age: 35, firstName: 'Bob' }, attributes: ['age', 'email'] }));

module.exports = {
  generateUser,
};
