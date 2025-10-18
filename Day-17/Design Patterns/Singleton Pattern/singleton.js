// 1️⃣ Singleton Pattern
// 🧠 Concept:

// Ensures only one instance of a class exists throughout the app.
// Useful for global settings, configurations, logging, etc.


// singleton.js
class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance; // return existing instance
    }
    this.settings = {};
    Config.instance = this;
  }

  set(key, value) {
    this.settings[key] = value;
  }

  get(key) {
    return this.settings[key];
  }
}

// Usage
const config1 = new Config();
config1.set("theme", "dark");

const config2 = new Config();
console.log(config2.get("theme")); // dark

console.log(config1 === config2); // true (same instance)



//run:
//node singleton.js
