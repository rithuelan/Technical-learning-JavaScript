// Static Stack (Fixed size)

// Fixed size stack, cannot exceed predefined capacity.

// Implemented using an array with a size limit.

class StaticStack {
    constructor(size) {
        this.size = size;
        this.items = new Array(size);
        this.top = -1; // Index of top element
    }

    push(element) {
        if (this.top >= this.size - 1) {
            console.log("Stack Overflow! Cannot push", element);
            return;
        }
        this.top++;
        this.items[this.top] = element;
    }

    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow!");
            return null;
        }
        const popped = this.items[this.top];
        this.top--;
        return popped;
    }

    peek() {
        return this.top >= 0 ? this.items[this.top] : null;
    }

    print() {
        if (this.top < 0) {
            console.log("Stack is empty");
            return;
        }
        for (let i = this.top; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }
}

// --- Usage ---
const stack = new StaticStack(3);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40); // Stack Overflow
console.log("Stack elements:");
stack.print();
console.log("Pop:", stack.pop());
console.log("Peek:", stack.peek());
