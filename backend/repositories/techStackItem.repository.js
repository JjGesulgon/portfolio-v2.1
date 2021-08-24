const models = require('./../models');
const repository = require('./index.js');

const techStackItem = models.techStackItem

class TechStackItemRepository extends repository {

  constructor(){
    super();
  }

  getAll(req, res) {
    new TechStackItemRepository().findAll(req, res, ['name', 'experience', 'proficiency'], techStackItem);
  }
}

module.exports = TechStackItemRepository;