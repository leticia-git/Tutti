'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'product',
        'nutrition',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'product',
        'sale',
        {
          type: Sequelize.TINYINT
        },
        queryInterface.addColumn(
          'product',
          'salePrice',
          {
            type: Sequelize.FLOAT
          })
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('product', 'nutrition'),
      queryInterface.removeColumn('product', 'sale'),
      queryInterface.removeColumn('product', 'salePrice')
    ]);
  }
};