import chalk from 'chalk';
import axios from 'axios';

console.log(chalk.green('Starting fetch...'));

async function fetchExample() {
    try {
        const res = await axios.get('https://api.github.com');
        console.log(chalk.blue('Status:'), res.status);
        console.log('Headers sample:', Object.keys(res.headers).slice(0, 4));
    } catch (err) {
        console.error(chalk.red('Request failed:'), err.message);
    }
}

fetchExample();

// To run:
// npm init -y
// npm install chalk axios
// node usePackages.js
//npm install chalk@4

