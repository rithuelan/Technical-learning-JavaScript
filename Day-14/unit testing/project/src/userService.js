const { fetchUser } = require('./api');

function greetUser(user) {
  return `Hello, ${user.name}!`;
}

async function getUserGreeting(id) {
  const user = await fetchUser(id);
  return greetUser(user);
}

function delayedMessage(msg, callback) {
  setTimeout(() => callback(msg), 1000);
}

// Logger for spy demo
function logger(msg) {
  console.log(msg);
}

function notifyUser(user) {
  logger(`Notified ${user.name}`);
}

module.exports = { greetUser, getUserGreeting, delayedMessage, logger, notifyUser };
