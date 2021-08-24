module.exports = app => {
  const techStackItem = require("../controllers/techStackItem.controller.js");

  var router = require("express").Router();


  // Retrieve all Tech Stack Item
  router.post("/", techStackItem.index);

  app.use('/api/tech-stack-items', router);
};