# 🎯 JavaScript Design Patterns

Design Patterns are **proven reusable solutions** to common software design problems.  
They help make code **scalable, maintainable, and cleanly organized**.

---

## 🧱 1. Singleton Pattern

### 📘 Concept
Ensures **only one instance** of a class exists and provides a **global access point** to it.

### 💡 Structure
- Private constructor
- Static `getInstance()` method

🛠️ Use Case

Logging service

Database connection

Global configuration

## 🏭 2. Factory Pattern
📘 Concept

Creates objects without specifying the exact class of the object that will be created.

💡 Structure

Factory class decides which subclass or type to instantiate.

**👀 3. Observer Pattern**
📘 Concept

Defines a one-to-many relationship — when one object changes state, all dependents are notified.

💡 Structure

Subject maintains a list of observers

Observers are notified of state changes

🛠️ Use Case

Event systems

UI data binding

Notifications (e.g., chat updates)

## 📦 4. Module Pattern
📘 Concept

Encapsulates private data and exposes public methods — using closures or ES modules.

💡 Structure

Immediately Invoked Function Expression (IIFE)

Returns an object of public methods

🛠️ Use Case

Code organization

Avoid global namespace pollution

Data privacy with closures

## 🧩 5. MVC (Model-View-Controller)
📘 Concept

**Separates** application logic into three layers:

**Model** – manages data & business logic

**View**– displays UI

**Controller** – connects model & view

🛠️ Use Case

Web apps (React, Angular, Express MVC)

UI-based architecture

Separating logic from presentation

## 🎮 6. Strategy Pattern
📘 Concept

Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.

💡 Structure

Context class uses different strategy objects for behavior changes.

**🛠️ Use Case**

Payment processing systems

Sorting algorithms

**Context-dependent operations**

| Pattern   | Purpose                   | Key Concept                  | Example Use Case               |
| --------- | ------------------------- | ---------------------------- | ------------------------------ |
| Singleton | Single global instance    | One shared object            | Database connection            |
| Factory   | Object creation           | Centralized factory method   | UI elements factory            |
| Observer  | One-to-many updates       | Subscription system          | Notifications, Events          |
| Module    | Encapsulation             | Private + Public interface   | Utility or state modules       |
| MVC       | Separation of concerns    | Model–View–Controller layers | Web application architecture   |
| Strategy  | Interchangeable behaviors | Algorithm substitution       | Payment, sorting, AI decisions |



**🧠 Key Notes**

**Use Singleton** for shared services.

**Use Factory** for centralized object creation.

**Use Observer** when one change affects multiple parts.

**Use Module** for data encapsulation.

**Use MVC** for scalable web app architecture.

Use Strategy to easily switch behaviors or algorithms.

## ⚙️ Run Instructions

**To test each example:**

# Create separate JS files for each pattern
node singleton.js
node factory.js
node observer.js
node module.js
node mvc.js
node strategy.js

## 🚀 Conclusion

Design Patterns help build cleaner, maintainable, and reusable code.
They improve scalability and reduce coupling — key to writing professional-grade JavaScript.