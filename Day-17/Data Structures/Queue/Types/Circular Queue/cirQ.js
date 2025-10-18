// Circular Queue

// The rear wraps around when it reaches the end of the array.

// Efficient memory usage (avoids "unused space" problem in linear queue).

class CircularQueue {
    constructor(size) {
        this.items = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue Overflow!");
            return;
        }
        if (this.front === -1) this.front = 0;
        this.rear = (this.rear + 1) % this.size;
        this.items[this.rear] = element;
    }

    dequeue() {
        if (this.front === -1) return "Queue Underflow!";
        const element = this.items[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1; // Queue empty
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return element;
    }

    print() {
        if (this.front === -1) return console.log("Queue is empty");
        let i = this.front;
        let result = "";
        while (true) {
            result += this.items[i] + " <- ";
            if (i === this.rear) break;
            i = (i + 1) % this.size;
        }
        console.log(result.slice(0, -4));
    }
}

// Usage
const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
console.log("Circular Queue:");
cq.print();
console.log("Dequeue:", cq.dequeue());
cq.print();


//to run:
//node cirQ.js