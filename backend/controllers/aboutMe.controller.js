const aboutMeRepository = require('../repositories/aboutMe.repository.js');

// Retrieve About Me from the database.
exports.index = (req, res) => new aboutMeRepository().getFirst(res);