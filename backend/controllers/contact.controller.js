const contactRepository = require('../repositories/contact.repository.js');

// Retrieve About Me from the database.
exports.index = (req, res) => new contactRepository().getFirst(res);