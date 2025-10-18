MVVM (Frontend — Vanilla JS implementation)
When to use

Frontend apps where the View binds to a ViewModel. Useful for rich client UI, two-way data-binding (e.g., forms).

Folder structure
mvvm-vanilla/
├── index.html
├── app.js
└── README.md

Approach

We’ll build a tiny observable system (simplified MVVM) so the View updates automatically when the ViewModel changes.

Setup & Run

Just open index.html in a browser (double-click or serve with a static server). No build steps required.

Sample output & behavior

Typing in the Name input updates the Live preview instantly (one-way binding from VM → view; input sets VM).

Adding a user via the form updates the users list below immediately — no manual DOM management needed after wiring.

Notes & Explanation

The observable func implements a pub/sub mechanism.

vm provides behavior for the view; the view only binds to vm.

This pattern mirrors frameworks (Knockout, Vue) but with zero dependencies — great for learning or small apps.


Folder Structure Recommendations (General)

A scalable app often uses a layered/faceted structure. Examples:

Backend (Node)

src/
├── controllers/
├── models/
├── routes/
├── services/      # business logic, external APIs
├── repositories/  # DB access
├── middlewares/
├── utils/
├── config/
└── app.js


Frontend (Single Page App)

src/
├── components/    # small, reusable UI parts
├── views/         # page-level components
├── services/      # API calls
├── store/         # app state (Vuex/Redux)
├── utils/
├── styles/
└── main.js


Principles:

Keep files small and focused.

Group by feature if project is large (feature folders containing view+model+tests).

Avoid deeply nested folders — 2–3 levels is usually enough.

Clean Code Practices (with examples)

Short, actionable list plus a tiny refactor demonstration.

Practices

Meaningful names — getUserById better than get().

Single Responsibility — functions/classes do one thing.

Small functions — each function ~20 lines or less where possible.

DRY — don’t repeat logic; extract helpers.

YAGNI & KISS — avoid premature abstractions.

Error handling — validate inputs, return helpful errors.

Consistent style — use Prettier / ESLint.

Comment intent, not implementation — explain why.

Write tests — unit tests for business logic.

Dependency inversion — depend on abstractions.

Example: Refactor (before → after)

Before (messy controller)

// messyController.js
exports.createUser = (req, res) => {
  const name = req.body.name;
  if (!name || name === "") return res.status(400).send("bad");
  const user = { id: Date.now(), name };
  // imagine the DB push is in this file too
  db.users.push(user);
  res.redirect("/users");
};


After (clean)

// controllers/userController.js
const userService = require("../services/userService");

exports.createUser = async (req, res, next) => {
  try {
    const { name } = req.body;
    const user = await userService.createUser({ name }); // validation inside service
    return res.redirect("/users");
  } catch (err) {
    next(err); // centralized error handling middleware can format response
  }
};


services/userService.js

const UserModel = require("../models/userModel");

exports.createUser = async ({ name }) => {
  if (!name || !name.trim()) throw new Error("Invalid name");
  return UserModel.create({ name: name.trim() });
};


Benefits:

Validation kept in service (single responsibility).

Controller only coordinates; services contain business logic.

Easier to test userService.createUser independently.

Testing & Dev Tools (quick notes)

Use Jest or Mocha/Chai for unit tests (services/models).

Use ESLint + Prettier for code style.

Use nodemon for hot-reloading dev server:

npm i -D nodemon
# package.json script:
"dev": "nodemon app.js"

Quick Checklist to Keep Code Organized

 One reason to change per module/class

 Small public surface area (export only necessary API)

 Keep folder structure predictable

 Name things by purpose (verbs for functions, nouns for classes)

 Write tests for services and utilities

 Centralize config (use config/ or env variables)