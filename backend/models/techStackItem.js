'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class techStackItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      techStackItem.belongsToMany(models.project, {through: 'tech_used', foreignKey: 'tech_stack_item_id'});
    }
  };
  techStackItem.init({
    name: DataTypes.STRING,
    experience: DataTypes.STRING,
    proficiency: DataTypes.DECIMAL,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'techStackItem',
    tableName: 'tech_stack_items',
  });
  return techStackItem;
};