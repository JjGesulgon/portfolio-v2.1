'use strict';
const {
  Model
} = require('sequelize');
// const techstackitem = require('./techstackitem');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      project.belongsToMany(models.techStackItem, {through: 'tech_used', foreignKey: 'project_id'});
      project.hasMany(models.samplePageImage, {foreignKey: 'project_id'});
    }
  };
  project.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    intro_image: DataTypes.STRING,
    screen_image: DataTypes.STRING,
    role: DataTypes.STRING,
    date_deployed: DataTypes.DATE,
    overview: DataTypes.TEXT,
    concept_description: DataTypes.TEXT,
    development_description: DataTypes.TEXT,
    github_repository: DataTypes.STRING,
    live: DataTypes.STRING,
    industry: DataTypes.STRING,
    slug: DataTypes.STRING,
    reason_if_unavailable: DataTypes.STRING,
    deleted_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};