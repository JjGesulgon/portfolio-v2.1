module.exports = app => {
  const techStackContentController = require("../controllers/techStackContent.controller.js");

  var router = require("express").Router();

  // Retrieve First Tech Stack Content
  router.get("/", techStackContentController.index);

  app.use('/api/tech-stack-content', router);
};