// multiply.js
function multiply(a, b) {
  return a * b;
}
module.exports = multiply;

// multiply.test.js
const assert = require('assert'); // Node.js built-in assertion
const multiply = require('./multiply');

describe('multiply function', () => {
  it('should return 6 for 2 * 3', () => {
    assert.strictEqual(multiply(2, 3), 6);
  });
});
