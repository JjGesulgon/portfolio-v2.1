const models = require('./../models');
const repository = require('./index.js');

const blog = models.blog

class BlogRepository extends repository {

  constructor(){
    super();
  }

  fields = () => {
    return {
      association: [
        {
          model: models.category,
          as: "category",
          attributes: ['name']
        }
      ],
      attributes:  [
        'id','category_id', 'title', 'author', 
        'content', 'published_at', 'header_image', 
        'slug'
      ]
    }
  }

  getAllWithPagination(req, res) {
    new BlogRepository().findAllWithPagination(req, res, this.fields(), blog);
  }

  getByID(req, res){
    new BlogRepository().findOneByID(req, res, this.fields(), blog);
  }
}

module.exports = BlogRepository;