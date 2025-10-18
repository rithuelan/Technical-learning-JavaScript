class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
    }
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }
    pop() {
        if (!this.top) return null;
        const popped = this.top.data;
        this.top = this.top.next;
        return popped;
    }
    peek() {
        return this.top ? this.top.data : null;
    }
    isEmpty() { return this.top === null; }
}
