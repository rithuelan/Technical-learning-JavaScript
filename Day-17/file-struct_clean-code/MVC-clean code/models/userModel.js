// Simple in-memory model: replace with DB calls in real apps.
let users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
let nextId = 3;

class UserModel {
  static getAll() {
    return users.slice(); // return copy
  }

  static create({ name }) {
    const user = { id: nextId++, name };
    users.push(user);
    return user;
  }

  // Example: findById, update, delete would go here
}

module.exports = UserModel;
