'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("teste")
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teste', { id: Sequelize.INTEGER });

  }
};
