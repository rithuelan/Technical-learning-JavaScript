class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  display() {
    const data = this.model.getData();
    this.view.render(data);
  }
}

module.exports = Controller;
