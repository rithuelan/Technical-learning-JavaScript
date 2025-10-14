const { delayedMessage, notifyUser, logger } = require('../src/userService');

jest.useFakeTimers();

test('delayedMessage calls callback after 1s', () => {
  const cb = jest.fn();
  delayedMessage('Hello', cb);

  // Fast-forward timer
  jest.advanceTimersByTime(1000);
  expect(cb).toHaveBeenCalledWith('Hello');
});

test('notifyUser calls logger correctly', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
  notifyUser({ name: 'Alice' });
  expect(spy).toHaveBeenCalledWith('Notified Alice');
  spy.mockRestore();
});
