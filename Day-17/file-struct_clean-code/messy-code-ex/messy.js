const fs = require('fs');
const DATA_FILE = 'users.json';

// Read users
let data = fs.existsSync(DATA_FILE) ? fs.readFileSync(DATA_FILE, 'utf8') : '[]';
data = JSON.parse(data);

// Add users directly
let user1 = { id: 1, name: 'Alice', email: 'alice@example.com' };
let user2 = { id: 2, name: 'Bob', email: 'bob@example.com' };

if (user1.email.includes('@')) data.push(user1);
if (user2.email.includes('@')) data.push(user2);

// Save users
fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// Print users directly
console.log('All Users:');
for (let i = 0; i < data.length; i++) {
    console.log(data[i].id, data[i].name, data[i].email);
}

// Inline email check
function checkEmail(email) {
    if (email.includes('@')) console.log(email + ' is valid');
    else console.log(email + ' is invalid');
}

checkEmail('test@example.com');
