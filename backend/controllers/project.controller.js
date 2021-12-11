const projectRepository = require('./../repositories/project.repository.js');

// Retrieve all Projects from the database.
exports.index = (req, res) => new projectRepository().getAllWithPagination(req,res);

exports.getBySlug = (req, res) => new projectRepository().getProjectBySlug(req, res);