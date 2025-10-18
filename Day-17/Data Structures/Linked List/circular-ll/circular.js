class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = this.head;
  }

  print(n = 10) { // n to avoid infinite loop
    let current = this.head;
    let count = 0;
    let result = "";
    while (current && count < n) {
      result += current.data + " -> ";
      current = current.next;
      count++;
    }
    result += "...";
    console.log(result);
  }
}

// Usage
const cll = new CircularLinkedList();
cll.append(100);
cll.append(200);
cll.append(300);
console.log("Circular Linked List:");
cll.print();
