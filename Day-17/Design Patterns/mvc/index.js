const Model = require("./MVC/model");
const View = require("./view");
const Controller = require("./controller");

const model = new Model();
const view = new View();
const controller = new Controller(model, view);

controller.display();
