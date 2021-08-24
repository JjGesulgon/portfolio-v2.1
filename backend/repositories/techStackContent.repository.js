const models = require('../models');
const repository = require('./index.js');

const techStackContent = models.techStackContent

class TechStackContentRepository extends repository {

  constructor(){
    super();
  }

  getFirst(res) {
    new TechStackContentRepository().findFirst(['body'], res, techStackContent);
  }
}

module.exports = TechStackContentRepository;