module.exports = app => {
  const aboutMe = require("../controllers/aboutMe.controller.js");

  var router = require("express").Router();

  // Retrieve First About Me
  router.get("/", aboutMe.index);

  app.use('/api/about-me', router);
};