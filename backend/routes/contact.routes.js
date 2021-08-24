module.exports = app => {
  const contact = require("../controllers/contact.controller.js");

  var router = require("express").Router();

  // Retrieve First About Me
  router.get("/", contact.index);

  app.use('/api/contact', router);
};