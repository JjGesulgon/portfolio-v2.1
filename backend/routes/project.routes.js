module.exports = app => {
  const projectController = require("../controllers/project.controller.js");

  var router = require("express").Router();

  // // Create a new Tutorial
  // router.post("/", tutorials.create);

  // Retrieve all Passions
  router.post("/", projectController.index);

  app.use('/api/projects', router);
};