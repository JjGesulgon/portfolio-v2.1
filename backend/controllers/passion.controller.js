const passionRepository = require('./../repositories/passion.repository.js');

// Retrieve all Passions from the database.
exports.index = (req, res) => new passionRepository().getAll(req, res);