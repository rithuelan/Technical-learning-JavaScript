# Queue in JavaScript

A **Queue** is a **linear data structure** that follows **FIFO (First In, First Out)** principle.  
The **first element added** is the **first one removed**.  

Think of a queue at a ticket counter: the first person to join the line is served first.

---

## 1️⃣ Basic Queue Operations

| Operation | Description |
|-----------|-------------|
| `enqueue(element)` | Add element at the **rear/end** of the queue |
| `dequeue()` | Remove element from the **front/start** of the queue |
| `peek()` | Return the **front element** without removing it |
| `isEmpty()` | Check if the queue is empty |
| `size()` | Number of elements in the queue |
| `print()` | Display all elements |

---

## 2️⃣ Types of Queue

### **A. Simple Queue (Linear Queue)**
- Elements are inserted at **rear** and removed from **front**.
- Fixed size (can grow dynamically in JS arrays).

### B. Circular Queue

The rear wraps around when it reaches the end of the array.

Efficient memory usage (avoids "unused space" problem in linear queue).

### C. Priority Queue

Each element has a priority.

Element with highest priority is dequeued first.

Can be implemented using arrays, heaps, or linked lists.

### D. Double-Ended Queue (Deque)

Elements can be inserted or removed from both ends.

# Can function as a stack or queue.

| Queue Type           | Behavior          | Insert            | Delete           | Use Case                            |
| -------------------- | ----------------- | ----------------- | ---------------- | ----------------------------------- |
| Linear Queue         | FIFO              | Rear              | Front            | Basic queue operations              |
| Circular Queue       | FIFO              | Rear              | Front            | Efficient memory usage              |
| Priority Queue       | Based on priority | Anywhere (sorted) | Highest priority | Scheduling tasks                    |
| Deque (Double-ended) | FIFO / LIFO       | Both ends         | Both ends        | Flexible operations, sliding window |

# 4️⃣ Notes / Techniques

***JS arrays can implement simple queues easily using push()/shift().**

**Circular queues:** avoid wasted space when elements are dequeued.

**Priority queues:** are often implemented using heaps for efficiency.

**Deque:** can simulate stack, queue, or sliding window algorithms.

**Advanced applications:** CPU scheduling, task management, BFS algorithm.
---