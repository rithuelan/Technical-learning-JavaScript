// divide.js
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
module.exports = divide;

// divide.test.js
const chai = require('chai');
const expect = chai.expect;
const divide = require('./divide');

describe('divide function', () => {
  it('should return 2 for 6 / 3', () => {
    expect(divide(6, 3)).to.equal(2);
  });

  it('should throw error for division by zero', () => {
    expect(() => divide(5, 0)).to.throw("Cannot divide by zero");
  });
});
