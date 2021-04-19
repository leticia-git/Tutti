'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teste', { id: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teste');
  }
};
