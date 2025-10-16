TypeScript Basics
Why

JavaScript is dynamic, which can lead to runtime errors and harder-to-maintain code.

TypeScript adds static typing and other features on top of JavaScript to improve:

Error detection at compile time

Readability and maintainability

Intelligent code completion & refactoring in editors

It’s widely used in large-scale applications, frameworks (Angular, NestJS), and libraries to reduce bugs and improve developer productivity.

What

Types: Specify the kind of data a variable can hold (string, number, boolean, array, tuple, etc.).

Interfaces: Define contracts for objects, classes, or function signatures.

Type Inference: TypeScript automatically infers variable types if not explicitly defined.

Decorators: Special functions applied to classes, methods, properties, or parameters for meta-programming (e.g., logging, validation).

Generics: Create reusable components, classes, or functions that work with multiple types safely.

How We Use It

Types: Prevent assigning wrong values to variables.

Interfaces: Ensure objects adhere to a specific structure.

Type Inference: Reduce boilerplate while keeping type safety.

Decorators: Enhance classes or methods without modifying the original logic.

Generics: Write reusable and type-safe functions/classes.

Setup & Run Instructions

Initialize project:

npm init -y
npm install typescript --save-dev


Initialize TypeScript configuration:

npx tsc --init


Write TypeScript files with .ts extension.

Compile TypeScript to JavaScript:

npx tsc


Compiled .js files can be run with Node.js:

node filename.js


Optional setup for decorators: Enable in tsconfig.json:

"experimentalDecorators": true


Optional setup for strict type checking:

"strict": true

Understanding

TypeScript prevents runtime errors by catching mistakes at compile time.

Types and interfaces make code self-documenting and maintainable.

Type inference balances convenience with type safety.

Decorators allow meta-programming and behavior augmentation.

Generics let you write reusable code without sacrificing type safety.

Overall, TypeScript is JavaScript + safety + productivity, ideal for medium to large applications and collaborative projects.
