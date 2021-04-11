'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enderecos - clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  enderecos - clientes.init({
    clientesId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'enderecos-clientes',
  });
  return enderecos - clientes;
};