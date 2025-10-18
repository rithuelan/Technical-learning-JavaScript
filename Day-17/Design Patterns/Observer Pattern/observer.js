// 3️⃣ Observer Pattern
// 🧠 Concept:

// Defines a one-to-many relationship between objects so that when one changes state, all its dependents are notified.
// Used in event systems, UI frameworks, etc.

// observer.js
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}

// Usage
const subject = new Subject();

function logger(data) {
  console.log(`Logger received: ${data}`);
}

subject.subscribe(logger);
subject.notify("Event 1"); // Logger received: Event 1

subject.unsubscribe(logger);
subject.notify("Event 2"); // No output


//run:
//node observer.js