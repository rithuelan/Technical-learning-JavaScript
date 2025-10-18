// //4️⃣ Module Pattern
// 🧠 Concept:

// Encapsulates code (variables + functions) in a self-contained unit.
// Prevents polluting global scope.
// Common in Node.js and frontend bundlers.

// modulePattern.js
const UserModule = (function() {
  let users = [];

  function addUser(user) {
    users.push(user);
    console.log(`${user} added`);
  }

  function listUsers() {
    return users;
  }

  return {
    addUser,
    listUsers
  };
})();

// Usage
UserModule.addUser("Alice");
UserModule.addUser("Bob");
console.log(UserModule.listUsers()); // ['Alice', 'Bob']


//run:
//node modulePattern.js