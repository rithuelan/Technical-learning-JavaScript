async function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: 'John Doe', age: 30 }), 100);
  });
}

module.exports = { fetchUser };
