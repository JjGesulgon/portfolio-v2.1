const BlogRepository = require('./../repositories/blog.repository.js');

// Retrieve all Projects from the database.
exports.index = (req, res) => new BlogRepository().getAllWithPagination(req,res);

exports.getByID = (req, res) => new BlogRepository().getByID(req, res);