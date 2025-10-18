const UserService = require('../services/UserService');
const User = require('../models/User');
const { isEmailValid } = require('../utils/Validator');

class UserController {
    static createUser(id, name, email) {
        if (!isEmailValid(email)) {
            console.log('Invalid email:', email);
            return;
        }
        const user = new User(id, name, email);
        UserService.addUser(user);
        console.log(`User ${name} added successfully!`);
    }

    static listUsers() {
        const users = UserService.getAllUsers();
        console.log('--- All Users ---');
        users.forEach(u => console.log(`ID: ${u.id}, Name: ${u.name}, Email: ${u.email}`));
    }
}

module.exports = UserController;
