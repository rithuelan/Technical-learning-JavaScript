// ### **A. Simple Queue (Linear Queue)**
// - Elements are inserted at **rear** and removed from **front**.
// - Fixed size (can grow dynamically in JS arrays).

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) { this.items.push(element); }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    peek() { return this.items[0]; }

    isEmpty() { return this.items.length === 0; }

    print() { console.log(this.items.join(" <- ")); }
}

// Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Linear Queue:");
queue.print();
console.log("Dequeue:", queue.dequeue());
console.log("Peek:", queue.peek());
queue.print();

//to run:
//node simpleQ.js