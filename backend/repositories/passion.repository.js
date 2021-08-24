const models = require('./../models');
const repository = require('./index.js');

const passion = models.passion

class PassionRepository extends repository {

  constructor(){
    super();
  }

  getAll(req, res) {
    new PassionRepository().findAll(req, res, ['name', 'description', 'image'], passion);
  }
}

module.exports = PassionRepository;