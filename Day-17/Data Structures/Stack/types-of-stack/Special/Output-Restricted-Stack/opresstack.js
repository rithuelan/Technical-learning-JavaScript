// Output-Restricted Stack

// Can delete only from top.

// Can insert anywhere (we’ll simulate insert at top/bottom).

class OutputRestrictedStack {
    constructor() {
        this.items = [];
    }

    // Insert at top
    pushTop(element) { this.items.push(element); }

    // Insert at bottom
    pushBottom(element) { this.items.unshift(element); }

    // Delete only from top
    pop() { return this.items.pop(); }

    print() { console.log(this.items.join(" ")); }
}

// --- Usage ---
const stack = new OutputRestrictedStack();
stack.pushTop(10);
stack.pushBottom(20);
stack.pushTop(30);
console.log("Stack elements:");
stack.print();
console.log("Pop top:", stack.pop());
console.log("Stack after pop:");
stack.print();
