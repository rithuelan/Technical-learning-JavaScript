// Input-Restricted Stack

// Can insert only at top.

// Can delete from both ends (top and bottom).

// We'll implement popTop() and popBottom().

class InputRestrictedStack {
    constructor() {
        this.items = [];
    }

    // Only insert at top
    push(element) { this.items.push(element); }

    // Delete from top
    popTop() { return this.items.pop(); }

    // Delete from bottom
    popBottom() { return this.items.shift(); }

    print() { console.log(this.items.join(" ")); }
}

// --- Usage ---
const stack = new InputRestrictedStack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack elements:");
stack.print();
console.log("Pop top:", stack.popTop());
console.log("Pop bottom:", stack.popBottom());
console.log("Stack after pops:");
stack.print();
