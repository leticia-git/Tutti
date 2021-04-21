'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido_produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
    }
  };
  pedido_produtos.init({
    pedidos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pedido_produtos',
  });
  return pedido_produtos;
};