const randomTwo = (first, second) => (Math.random() > 0.5 ? first : second);
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
  randomItem, randomTwo,
};
