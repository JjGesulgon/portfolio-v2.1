const emailConfig = require('./../config/email-config')();
const mailgun = require('mailgun-js')(emailConfig);
exports.sendEmail = (message, attachment) =>
  new Promise((resolve, reject) => {
    const data = {
      from: 'jjgesulgon.dev <jjgesulgon@gmail.com>',
      to: 'jjgesulgon@gmail.com',
      subject: message.subject,
      text: message.text,
      inline: attachment,
      html: '',
    };

    mailgun.messages().send(data, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });