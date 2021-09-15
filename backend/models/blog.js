'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Blog.belongsTo(models.category, {foreignKey: 'category_id'});
    }
  };
  Blog.init({
    category_id: DataTypes.BIGINT,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT,
    published_at: DataTypes.DATE,
    header_image: DataTypes.STRING,
    slug: DataTypes.STRING,
    deleted_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'blog',
  });
  return Blog;
};