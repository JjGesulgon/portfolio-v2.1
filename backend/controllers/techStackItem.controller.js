const techStackItemRepository = require('./../repositories/techStackItem.repository.js');

// Retrieve all Passions from the database.
exports.index = (req, res) => new techStackItemRepository().getAll(req, res);