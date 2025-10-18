// //Dynamic Stack (Dynamic size)

// Can grow dynamically.

// Implemented using arrays (JS arrays are dynamic).

class DynamicStack {
    constructor() {
        this.items = [];
    }

    push(element) { this.items.push(element); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
    print() { console.log(this.items.join(" ")); }
}

// --- Usage ---
const stack = new DynamicStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4); // No limit
console.log("Dynamic Stack:");
stack.print();
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
