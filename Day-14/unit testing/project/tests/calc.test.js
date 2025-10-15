const { add, subtract, multiply, divide } = require('../src/calc');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('handles division by zero', () => {
  expect(divide(10, 0)).toBe('Error');
});
