module.exports = app => {
  const sendEmailController = require("../controllers/sendEmail.controller.js");

  const { sendEmail } = sendEmailController;

  var router = require("express").Router();

  router.post('/', async (req, res, next) => {
    try {
        await sendEmail(req.body.message);
        res.json({message: 'Your email has been sent'});
        await next();
       } catch (e) {
        await next(e);
     }
   });

  app.use('/api/mail', router);
};