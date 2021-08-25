module.exports = app => {
  const blogController = require("../controllers/blog.controller.js");

  var router = require("express").Router();

  // // Create a new Tutorial
  // router.post("/", tutorials.create);

  // Retrieve all Blogs
  router.post("/", blogController.index);

  // Retrieve all Blogs
  router.post("/get-by-id", blogController.getByID);

  app.use('/api/blogs', router);
};