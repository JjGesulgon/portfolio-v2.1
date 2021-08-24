const models = require('./../models');
const repository = require('./index.js');

const project = models.project

class ProjectRepository extends repository {

  constructor(){
    super();
  }

  fields = () => {
    return {
      association: [
        {
          model: models.techStackItem,
          as: "techStackItems",
          attributes:['name', 'experience', 'proficiency']
        },
        {
          model: models.samplePageImage,
          as: "samplePageImages",
          attributes: ['image']
        }
      ],
      attributes:  [
        'id','name', 'type', 'intro_image', 
        'screen_image', 'role', 'date_deployed', 
        'overview', 'concept_description', 'development_description', 
        'github_repository', 'live', 'industry', 
        'slug', 'reason_if_unavailable'
      ]
    }
  }

  getAllWithPagination(req, res) {
    new ProjectRepository().findAllWithPagination(req, res, this.fields(), project);
  }

  getProjectByID(req, res){
    new ProjectRepository().findOneByID(req, res, this.fields(), project);
  }
}
module.exports = ProjectRepository;