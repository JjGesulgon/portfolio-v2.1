const models = require('../models');
const repository = require('./index.js');

const contact = models.contact

class ContactRepository extends repository {

  constructor(){
    super();
  }

  getFirst(res) {
    new ContactRepository().findFirst(['content', 'email', 'instagram_link', 'twitter_link', 'linkedin_link', 'devto_link'], res, contact);
  }
}

module.exports = ContactRepository;