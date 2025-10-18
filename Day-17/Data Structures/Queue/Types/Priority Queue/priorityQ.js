// Priority Queue

// Each element has a priority.

// Element with highest priority is dequeued first.

// Can be implemented using arrays, heaps, or linked lists.

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) this.items.push(queueElement);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift().element;
    }

    peek() { return this.items[0]?.element; }

    isEmpty() { return this.items.length === 0; }

    print() {
        console.log(this.items.map(e => `${e.element}(p=${e.priority})`).join(" <- "));
    }
}

// Usage
const pq = new PriorityQueue();
pq.enqueue("Task1", 2);
pq.enqueue("Task2", 1);
pq.enqueue("Task3", 3);
console.log("Priority Queue:");
pq.print();
console.log("Dequeue:", pq.dequeue());
pq.print();


//to run:
//node priority.js