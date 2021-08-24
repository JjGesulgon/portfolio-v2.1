const { Op } = require("sequelize");

class Repository {
    
  constructor() {
    if (this.constructor === Repository) {
      throw new TypeError('Abstract class cannot be instantiated directly.'); 
    }
  }

  // Find all items in the table with search functionality
  async findAll(req, res, attrib, model) {
    const query = []; // array [attributes, <search value>]

    for (const [key, value] of Object.entries(model.rawAttributes)) {
      query.push({
        [key]: {
          [Op.like]: '%' + req.body.search + '%'
        }
      })
    }

    await model.findAll({
      attributes: attrib,
      where: {
        [Op.or]: query
      }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
  }

  // Find all items in the table with pagination & search functionality
  async findAllWithPagination(req, res, fields, model){
    const query = []; // array [attributes, <search value>]
    let limit = 5;   // number of records per page
    let offset = 0; // starting record

    //create query array
    for (const [key, value] of Object.entries(model.rawAttributes)) {
      query.push({
        [key]: {
          [Op.like]: '%' + req.body.search + '%'
        }
      })
    }

    await model.findAndCountAll()
    .then((data) => {
      let page = req.query.page;
      let pages = Math.ceil(data.count/limit);
      offset = limit * (page - 1);

      model.findAll({
        limit: limit,
        offset: offset,
        attributes: fields.attributes,
        include: fields.association,
        where: {
          [Op.or]: query
        }
      })
      .then(data => {
        res.status(200).json({
          'data': data,
          'count': data.count,
          'pages': pages
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data."
        });
      });
    })
  }

  // Find the first record in the table
  async findFirst(attrib, res, model) {
    await model.findAll({limit: 1, attributes: attrib, order: [[ 'created_at', 'DESC']]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data."
        });
      });
  }

  // Search record by ID
  async findOneByID(req, res, fields, model){
    await model.findByPk(req.body.id, {
      attributes: fields.attributes,
      include: fields.association,
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
  }
}

module.exports = Repository;