const fs = require('fs');
const path = require('path');
const User = require('../models/User');

const DATA_FILE = path.join(__dirname, '../../data/users.json');

class UserService {
    static getAllUsers() {
        return fs.existsSync(DATA_FILE)
            ? JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'))
            : [];
    }

    static addUser(user) {
        const users = this.getAllUsers();
        users.push(user);
        fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
    }
}

module.exports = UserService;
