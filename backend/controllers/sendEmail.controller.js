const emailConfig = require('./../config/email-config')();
const mailgun = require('mailgun-js')(emailConfig);

exports.sendEmail = (req, res, next) => {
  new Promise((resolve, reject) => {
    const data = {
      from: 'jjgesulgon.dev <jjgesulgon@gmail.com>',
      to: 'jjgesulgon@gmail.com',
      subject: req.body.message.subject,
      text: req.body.message.text,
      inline: null,
      html: '',
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  })
  .then(() => {
    res.json({message: 'Your email has been sent'});
      next();
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Failed to send email"
    });
    next(err);
  });
}