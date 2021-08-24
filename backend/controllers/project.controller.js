const projectRepository = require('./../repositories/project.repository.js');

// Retrieve all Projects from the database.
exports.index = (req, res) => new projectRepository().getAllWithPagination(req,res);