'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  contact.init({
    content: DataTypes.TEXT,
    email: DataTypes.STRING,
    instagram_link: DataTypes.STRING,
    twitter_link: DataTypes.STRING,
    linkedin_link: DataTypes.STRING,
    devto_link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact',
    freezeTableName: true,
  });
  return contact;
};