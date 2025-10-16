interface User {
  id: number;
  name: string;
  email?: string; // optional property
}

const user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
};

const user2: User = {
  id: 2,
  name: "Bob"
};

interface Admin extends User {
  role: "admin" | "superadmin";
}

const admin: Admin = {
  id: 3,
  name: "Charlie",
  role: "admin"
};

console.log(user1, user2, admin);
