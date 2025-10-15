// 1️⃣ Provide a factory function for jest.mock
jest.mock('../src/api', () => ({
  fetchUser: jest.fn()  // This is now a mock function
}));

const api = require('../src/api');
const { getUserGreeting } = require('../src/userService');

test('returns greeting with mocked user', async () => {
  // Mock fetchUser for this test
  api.fetchUser.mockResolvedValue({ name: 'Alice', age: 25 });

  const greeting = await getUserGreeting(1);
  expect(greeting).toBe('Hello, Alice!');
});
