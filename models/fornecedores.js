'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fornecedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  fornecedores.init({
    nome_fantasia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fornecedores',
  });
  return fornecedores;
};