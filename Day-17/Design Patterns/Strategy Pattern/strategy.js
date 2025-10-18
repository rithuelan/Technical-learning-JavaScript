// 6️⃣ Strategy Pattern
// 🧠 Concept:

// Defines a family of algorithms (strategies) and makes them interchangeable at runtime.
// Used in payment methods, sorting, compression, etc.

// strategy.js
class PaypalStrategy {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class CreditCardStrategy {
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PaymentContext {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy.pay(amount);
  }
}

// Usage
const payment = new PaymentContext();
payment.setStrategy(new PaypalStrategy());
payment.pay(100); // Paid 100 using PayPal

payment.setStrategy(new CreditCardStrategy());
payment.pay(200); // Paid 200 using Credit Card

//run:
//node strategy.js