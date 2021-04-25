'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable("cartoes"),
      queryInterface.dropTable("clientes"),
      queryInterface.dropTable("comentarios"),
      queryInterface.dropTable("enderecos-clientes"),
      queryInterface.dropTable("enderecosfornecedores"),
      queryInterface.dropTable("entregadores"),
      queryInterface.dropTable("entregas"),
      queryInterface.dropTable("fornecedores"),
      queryInterface.dropTable("pagamentos"),
      queryInterface.dropTable("pedido_produtos"),
      queryInterface.dropTable("pedidos"),
      queryInterface.dropTable("produtos"),
      queryInterface.dropTable("receitas"),
      queryInterface.dropTable("usuarios")
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('cartoes', { id: Sequelize.INTEGER }),
      queryInterface.createTable('clientes', { id: Sequelize.INTEGER }),
      queryInterface.createTable('comentarios', { id: Sequelize.INTEGER }),
      queryInterface.createTable('enderecos-clientes', { id: Sequelize.INTEGER }),
      queryInterface.createTable('enderecosfornecedores', { id: Sequelize.INTEGER }),
      queryInterface.createTable('entregadores', { id: Sequelize.INTEGER }),
      queryInterface.createTable('entregas', { id: Sequelize.INTEGER }),
      queryInterface.createTable('fornecedores', { id: Sequelize.INTEGER }),
      queryInterface.createTable('pagamentos', { id: Sequelize.INTEGER }),
      queryInterface.createTable('pedido_produtos', { id: Sequelize.INTEGER }),
      queryInterface.createTable('pedidos', { id: Sequelize.INTEGER }),
      queryInterface.createTable('produtos', { id: Sequelize.INTEGER }),
      queryInterface.createTable('receitas', { id: Sequelize.INTEGER }),
      queryInterface.createTable('usuarios', { id: Sequelize.INTEGER,email:{type: Sequelize.STRING,allowNull:false},password:{type: Sequelize.STRING,allowNull:false}}), 
    ]);
  }
};
