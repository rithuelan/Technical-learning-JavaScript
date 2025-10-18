const UserModel = require("../models/userModel");

// Controller functions keep logic thin and call model methods.
exports.home = (req, res) => {
  res.render("index", { title: "MVC Example" });
};

exports.listUsers = (req, res) => {
  const users = UserModel.getAll();
  res.render("users", { users });
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).send("Invalid user name");
  }
  UserModel.create({ name: name.trim() });
  res.redirect("/users");
};
