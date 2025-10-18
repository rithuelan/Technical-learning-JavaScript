class Deque {
    constructor() { this.items = []; }

    addFront(element) { this.items.unshift(element); }
    addRear(element) { this.items.push(element); }

    removeFront() { return this.items.shift(); }
    removeRear() { return this.items.pop(); }

    peekFront() { return this.items[0]; }
    peekRear() { return this.items[this.items.length - 1]; }

    isEmpty() { return this.items.length === 0; }

    print() { console.log(this.items.join(" <- ")); }
}

// Usage
const deque = new Deque();
deque.addRear(1);
deque.addRear(2);
deque.addFront(0);
console.log("Deque:");
deque.print();
console.log("Remove Front:", deque.removeFront());
console.log("Remove Rear:", deque.removeRear());
deque.print();


//to run:
//node deque.js