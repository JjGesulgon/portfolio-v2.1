'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class techStackContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  techStackContent.init({
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'techStackContent',
    tableName: 'tech_stack_content',
    freezeTableName: true,
  });
  return techStackContent;
};