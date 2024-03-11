'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MasterData.init({
    name: DataTypes.STRING,
    types: DataTypes.STRING,
    displayName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MasterData',
  });
  return MasterData;
};