module.exports = app => {
  const sendEmailController = require("../controllers/sendEmail.controller.js");

  const { sendEmail } = sendEmailController;

  var router = require("express").Router();

  router.post("/", sendEmail);

  app.use('/api/mail', router);
};