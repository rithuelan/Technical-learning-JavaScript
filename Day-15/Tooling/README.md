1️⃣ npm — Node Package Manager
What it is

npm is the default package manager for Node.js.

It allows you to install, manage, and share libraries (packages) that your project depends on.

Key Features

Install packages locally or globally.

Version management and dependency control.

Running scripts (build, test, start).

Example
# Initialize a project
npm init -y

# Install a package (chalk for colorful console logs)
npm install chalk

// index.js
const chalk = require('chalk');
console.log(chalk.green('Hello, npm!'));


Usage:
npm install, npm run build, npm uninstall package-name.

2️⃣ Yarn — Alternative Package Manager
What it is

Yarn is an alternative to npm created by Facebook.

Faster, deterministic installs, and better caching than npm.

Key Features

Yarn.lock ensures consistent installs across machines.

Faster installations using offline cache.

Same scripts and commands as npm.

Example
# Initialize project
yarn init -y

# Add a package
yarn add axios

// index.js
const axios = require('axios');
axios.get('https://api.github.com').then(res => console.log(res.status));


Usage:
yarn install, yarn add package-name, yarn remove package-name.

3️⃣ Linters — ESLint
What it is

ESLint is a linter that checks your JavaScript code for errors, style issues, and best practices.

Helps maintain code quality and consistency.

Key Features

Detects syntax errors.

Enforces coding style (semicolons, quotes, spacing).

Supports plugins for React, TypeScript, etc.

Example
npm install eslint --save-dev
npx eslint --init

// .eslintrc.json
{
  "env": { "browser": true, "es2021": true },
  "extends": "eslint:recommended",
  "rules": { "semi": ["error", "always"], "quotes": ["error", "single"] }
}

// bad.js
let name="Rithiha"
console.log("Hello "+name)


Run lint:

npx eslint bad.js


ESLint will point out missing semicolons, inconsistent quotes, etc.

4️⃣ Formatters — Prettier
What it is

Prettier is a code formatter that automatically formats your code in a consistent style.

Works with JavaScript, HTML, CSS, JSON, and more.

Key Features

Ensures consistent indentation, quotes, semicolons.

Integrates with ESLint.

Reduces arguments over coding style in teams.

Example
npm install --save-dev prettier

// .prettierrc
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2
}

// messy.js
function hello(name){console.log("Hello "+name)}
hello("Rithiha")


Run Prettier:

npx prettier --write messy.js


Output:

function hello(name) {
  console.log('Hello ' + name);
}
hello('Rithiha');

5️⃣ Bundlers — Webpack (or Parcel, Vite)
What it is

Bundlers combine multiple JS modules, CSS, and assets into single optimized files for browsers.

Essential for modern front-end development.

Key Features

Combines multiple JS files into one bundle.

Supports ES modules (import/export).

Can process CSS, images, and other assets with loaders.

Optimizes code for production.

Example
npm install --save-dev webpack webpack-cli

// src/index.js
import { greet } from './utils.js';
console.log(greet('Rithiha'));

// src/utils.js
export function greet(name) {
  return `Hello, ${name}!`;
}

// webpack.config.js
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') },
  mode: 'development'
};


Run:

npx webpack


Generates dist/bundle.js containing all your code combined.

✅ Summary Table
Tool	Purpose	Commands / Usage
npm	Dependency manager for Node.js projects	npm install, npm run build
Yarn	Faster alternative to npm	yarn add, yarn install
ESLint	Linting tool to check code quality and enforce best practices	npx eslint file.js
Prettier	Code formatter for consistent style	npx prettier --write file.js
Webpack	Bundler to combine modules, CSS, assets into one optimized file	npx webpack

💡 In short:

Tooling is about automation, consistency, and maintainability. Using these tools together allows a JavaScript project to be:

Easy to build and run (npm/yarn)

Clean and readable (Prettier)

Error-free and standardized (ESLint)

Optimized and deployable (Webpack)
