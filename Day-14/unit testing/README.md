🧪 Unit Testing in JavaScript
🧠 What is Unit Testing?

Unit testing is the process of testing individual units of code (functions, modules, or classes) in isolation to ensure they behave as expected.
Each test verifies that a small piece of code works correctly without depending on other parts of the system.

💡 Why it matters

Detects bugs early before integration.

Ensures new changes don’t break old functionality.

Makes refactoring and updates safer.

Improves code quality and confidence.

⚙️ Core Concepts
Concept	Description
Test Case	A single check verifying a specific behavior.
Test Suite	A group of related test cases.
Assertion	The comparison between actual output and expected output.
Mocking	Replacing real functions (like API calls) with fake ones to test behavior in isolation.
Spy	Tracks how a function is used (called or not, with what arguments).
Stub	A dummy function that returns controlled values during testing.
Fake	A lightweight in-memory replacement (like a fake database).
Coverage	Percentage of your code executed during tests.
Snapshot	A saved version of output used to detect unintended changes.
🧰 Popular Testing Frameworks
1. Jest

Created by Facebook.

Includes test runner, assertion library, mocking, coverage, and snapshots.

Works great for both Node.js and front-end (React) applications.

Simple configuration — usually no setup needed.

2. Mocha

A flexible test runner for JavaScript.

Provides structure for writing tests but needs additional libraries for assertions and mocking.

3. Chai

An assertion library often used with Mocha.

Offers three styles: expect, should, and assert.

Used to check conditions in tests (e.g., expected vs actual output).

🧩 How Unit Testing Works
Steps:

Arrange → Set up your data and environment for the test.

Act → Run the function or unit you’re testing.

Assert → Check if the actual output matches the expected output.

Example process (conceptually):

You test a function that adds two numbers.

Arrange numbers → Call the function → Assert that the result equals the expected sum.

🧱 Writing Effective Test Cases
Principle	Meaning
Isolated	Test one unit at a time (no external dependencies).
Repeatable	Should always produce the same result.
Readable	Clearly describe what the test checks.
Independent	No dependency between tests.
Small and Fast	Quick to execute and focused on one behavior.
Good Test Case Naming:

“should return total price after discount”

“should throw error if user not found”

“should convert input to lowercase when saving”

🧪 Mocking in Unit Testing

Mocking is essential for isolating the unit under test.
Instead of making real API calls, database queries, or file reads, you simulate their behavior.

Why mock?

Real APIs may be slow or unavailable.

You want to test only your logic, not external systems.

Easier to simulate different scenarios (e.g., success, failure).

Types of Mocking Tools:
Type	Jest	Mocha/Chai Equivalent
Mock Functions	Built-in (jest.fn())	Sinon
Spies	Built-in (jest.spyOn())	Sinon.spy
Stubs	Built-in (mockResolvedValue())	Sinon.stub
🕹 Handling Asynchronous Code in Tests

Modern JavaScript uses promises and async/await.
Your test framework should wait for async operations to finish before asserting results.

Key points:

Use async/await for cleaner test logic.

Handle rejected promises or expected errors.

Avoid using real timers; use fake timers instead.

📊 Test Coverage

Test coverage measures how much of your code is tested.
It helps identify untested or dead code.

Common metrics:

Statements coverage: How many lines were run.

Branch coverage: How many if/else branches were tested.

Function coverage: How many functions were executed.

Line coverage: Which lines were tested.

💡 High coverage is good, but meaningful tests are better than 100% meaningless coverage.

🧭 When to Use Each Framework
Use Case	Recommended Tool
Frontend (React, Next.js)	Jest
Node.js APIs	Jest or Mocha + Chai
Legacy code or custom setup	Mocha + Chai + Sinon
Want simple config & speed	Jest
Want flexibility & control	Mocha
🧾 Best Practices for Unit Testing

Write tests before or alongside code (TDD approach if possible).

Keep tests fast and isolated — don’t rely on external services.

Reset mocks and data after every test.

Use descriptive names for test cases.

Aim for high coverage but prioritize test quality.

Avoid logic in tests — tests should be declarative, not computed.

Store tests near your source code (e.g., /tests or __tests__ folder).

Automate testing with CI/CD pipelines (e.g., GitHub Actions).

🧩 Common Testing Patterns
Pattern	Description
AAA (Arrange–Act–Assert)	Organizes test flow.
Mock/Stub Pattern	Replace dependencies with mocks.
Snapshot Testing	Compare outputs across versions.
Test Fixtures	Reusable test data setup.
🔍 Debugging Tests

If a test fails:

Check if you’re mocking correctly.

Verify async operations are awaited.

Use watch mode (jest --watch) for quick iteration.

Add logs or use a debugger to inspect variable states.

Reset mocks between tests (afterEach()).

🧠 Summary
Concept	Key Takeaway:
-Unit Testing	Testing individual functions/modules in isolation.
-Jest	Complete testing solution for JS/React apps.
-Mocha + Chai	Modular and customizable testing setup.
-Mocking	Simulate dependencies for isolated tests.
-Good Tests	Clear, focused, repeatable, independent.
-Coverage	Measures tested vs untested code.
