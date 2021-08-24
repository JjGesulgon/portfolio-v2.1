const techStackContentRepository = require('../repositories/techStackContent.repository.js');

// Retrieve Tech Stack Content from the database.
exports.index = (req, res) => new techStackContentRepository().getFirst(res);