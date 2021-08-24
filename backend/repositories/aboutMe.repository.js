const models = require('../models');
const repository = require('./index.js');

const aboutMe = models.aboutMe

class AboutMeRepository extends repository {

  constructor(){
    super();
  }

  getFirst(res) {
    new AboutMeRepository().findFirst(['body', 'image'], res, aboutMe);
  }
}

module.exports = AboutMeRepository;