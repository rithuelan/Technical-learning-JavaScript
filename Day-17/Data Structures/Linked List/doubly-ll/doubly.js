class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  printForward() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  printBackward() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }
    result += "null";
    console.log(result);
  }
}

// Usage
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
console.log("Doubly Linked List forward:");
dll.printForward();
console.log("Doubly Linked List backward:");
dll.printBackward();
