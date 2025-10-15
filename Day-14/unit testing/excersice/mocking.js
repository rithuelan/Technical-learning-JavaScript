// api.js
async function fetchUser(userId) {
  // Simulate API call
  return { id: userId, name: 'Alice' };
}
module.exports = { fetchUser };

// userService.js
const { fetchUser } = require('./api');

async function getUserName(userId) {
  const user = await fetchUser(userId);
  return user.name;
}
module.exports = { getUserName };

// userService.test.js
const { getUserName } = require('./userService');
const api = require('./api');

jest.mock('./api'); // Mock the module

test('returns mocked user name', async () => {
  api.fetchUser.mockResolvedValue({ id: 1, name: 'Bob' });
  const name = await getUserName(1);
  expect(name).toBe('Bob');
});
