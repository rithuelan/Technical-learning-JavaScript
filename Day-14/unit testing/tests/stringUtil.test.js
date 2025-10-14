const { capitalize, reverse, capitalizeWords } = require('../src/stringUtil');

test('capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('reverses a string', () => {
  expect(reverse('abc')).toBe('cba');
});

test('capitalizes all words', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
});

test('snapshot test for object', () => {
  const obj = { name: 'Alice', age: 25 };
  expect(obj).toMatchSnapshot();
});
