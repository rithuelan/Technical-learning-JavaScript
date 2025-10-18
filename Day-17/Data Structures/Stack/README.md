# Stack in JavaScript

A **Stack** is a **linear data structure** that follows **LIFO (Last In, First Out)** principle.  
The **last element added** is the **first one removed**.  
Think of a stack of plates: you put plates on top and take them from the top.

---

## 1️⃣ Basic Stack Operations

| Operation | Description |
|-----------|-------------|
| `push(element)` | Add element to the top |
| `pop()` | Remove element from the top |
| `peek()` | Return top element without removing it |
| `isEmpty()` | Check if stack is empty |
| `size()` | Number of elements in the stack |
| `print()` | Display all elements |

---

## 2️⃣ Stack Implementation in JavaScript

### **A. Array-Based Stack**
```javascript
const stack = [];
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
console.log(stack[stack.length - 1]); // 10 (peek)
B. Linked List-Based Stack
Each node contains data and a pointer to the next node.

Push/Pop operations are O(1).

javascript
Copy code
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() { this.top = null; }

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

  peek() { return this.top ? this.top.data : null; }
}
3️⃣ Types of Stack
A. Based on Implementation
Type	Description
Array-Based	Uses JavaScript arrays
Linked List-Based	Uses nodes & pointers, dynamic size

B. Based on Access Behavior
Type	Description
Static Stack	Fixed size (array with max length)
Dynamic Stack	Can grow dynamically (array or linked list)

C. Special / Theoretical Stack Types
Type	Description
Input-Restricted Stack	Insert only at top, delete from top or bottom
Output-Restricted Stack	Delete only from top, insert at top or bottom

4️⃣ Advanced Stack Techniques
Multi-Stack in Single Array

Store multiple stacks in one array efficiently.

Stack with Minimum/Maximum

Maintain auxiliary stack to track min/max in O(1).

Expression Evaluation

Evaluate postfix or infix expressions.

Undo/Redo Functionality

Maintain previous states in stack (like text editors).

Recursion Simulation

Recursive function calls internally use stack.

Can simulate recursion manually using a stack.

## 5️⃣ Summary Table

| Category          | Type                  | Implementation        | Use Case                               |
|------------------|----------------------|---------------------|---------------------------------------|
| Implementation    | Array-based          | JS Array             | Most common                            |
| Implementation    | Linked List-based    | Node + pointer       | Dynamic, O(1) operations              |
| Access Behavior   | Static               | Array with max size  | Fixed memory                           |
| Access Behavior   | Dynamic              | Array / Linked List  | Flexible memory                        |
| Special           | Input-Restricted     | Array / Deque        | Insert at top, delete from both ends  |
| Special           | Output-Restricted    | Array / Deque        | Delete from top, insert anywhere      |
| Advanced          | Min/Max Stack        | Stack + auxiliary    | Track min/max in O(1)                 |
| Advanced          | Multi-Stack          | Single array         | Multiple stacks sharing array         |
| Advanced          | Expression Eval      | Stack                | Postfix / Infix evaluation            |
| Advanced          | Undo/Redo            | Stack                | State management                       |


6️⃣ Usage Notes
JS arrays are dynamic, so most stack operations are handled with push() and pop().

Linked List stack is efficient for frequent push/pop and dynamic memory.

Special stacks are mostly academic, useful for algorithm practice.

Advanced techniques include browser history, undo-redo, and expression evaluation.

---
