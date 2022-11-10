/**
 * Just a simple Math.random to choose between first or second argument
 * @param {*} [first=null] The first argument to choose from
 * @param {*} [second=null] The second argument to choose from
 * @returns {*} Returns the first or second argument
 */
const randomTwo = (first = null, second = null) => (Math.random() > 0.5 ? first : second);

/**
 * Just a simple Math.random to choose a random element from the array
 * @param {Array<*>} [arr=[]] List of elements to choose from
 * @returns {*} Returns a random element from the array
 */
const randomItem = (arr = []) => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
  randomItem, randomTwo,
};
