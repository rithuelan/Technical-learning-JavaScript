# Linked List in JavaScript

A **Linked List** is a **linear data structure** where elements (nodes) are connected using pointers.  
Each node contains:

1. **Data**: The value stored  
2. **Next**: Reference to the next node  

Unlike arrays, linked lists **do not require contiguous memory**, making insertion and deletion efficient.

---

## 1️⃣ Types of Linked Lists

### 1. Singly Linked List
- Each node points to the **next node only**.  
- Traversal is **one-way**.  

### 2. Doubly Linked List

Each node has next and previous pointers.

Traversal is both directions.

### 3. Circular Linked List

Last node points back to the first node, forming a circle.

Can be singly or doubly circular.

### 2️⃣ Linked List Operations / Techniques

# Insertion

At head, at tail, or at a specific index.

# Deletion

Remove node by value or index.

# Traversal

**Singly → one-way; Doubly → both ways; Circular → loop until head.**

# Searching

Find node by value or position.

# Reversal

Reverse the linked list in-place.

**Advanced Techniques**

Detect loops (Floyd’s cycle detection).

Merge two linked lists.

Remove duplicates.

## Implement stacks or queues using linked lists.

| Type                 | Next Pointer | Prev Pointer | Circular | Traversal      | Use Case                     |
| -------------------- | ------------ | ------------ | -------- | -------------- | ---------------------------- |
| Singly Linked List   | ✔            | ✖            | ✖        | Forward only   | Simple lists, stacks         |
| Doubly Linked List   | ✔            | ✔            | ✖        | Forward & Back | Browser history, playlist    |
| Circular Linked List | ✔            | ✖ (or ✔)     | ✔        | Loop through   | Round-robin, circular buffer |

### 4️⃣ Usage Notes

**Singly** → simplest, less memory.

**Doubly** → easier for backward traversal, more memory.

**Circular** → ideal for repeating structures, scheduling.

**Linked Lists vs Arrays** → Arrays offer fast index access, Linked Lists are better for frequent insertions/deletions.