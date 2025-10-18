const UserController = require('./src/controllers/UserController');

// Create users
UserController.createUser(1, 'Alice', 'alice@example.com');
UserController.createUser(2, 'Bob', 'bob@example.com');

// List all users
UserController.listUsers();
