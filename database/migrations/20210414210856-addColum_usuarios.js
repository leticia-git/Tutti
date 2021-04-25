'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'usuarios',
        'email',
        {
          type: Sequelize.STRING,
          allowNull:false
        }
      ),
      queryInterface.addColumn(
        'usuarios',
        'password',
        {
          type: Sequelize.STRING,
          allowNull:false
        }, 
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('usuarios', 'email'),
      queryInterface.removeColumn('usuarios', 'password')
    ]);
  }
};
