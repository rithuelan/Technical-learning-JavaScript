class Model {
  constructor() {
    this.data = "Hello MVC";
  }

  getData() {
    return this.data;
  }
}

module.exports = Model; // ✅ important!
