const generateUser = require('./generateUser');

/**
 * test string
 * @type {string}
 */
const dd = '2';

/**
 * @type {{ specific:{ age:number,id:string }, attributes: Array<string>}}
 */
const object = {
  specific: { age: 4, id: 'test' }, attributes: [''],
};

// console.log(object);

module.exports = {
  generateUser,
};
