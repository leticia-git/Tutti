'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order_item', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      price:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      quantity:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      itemTotal:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      orderId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"order"
          },
          key:'id'
        }
      },
      productId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"product"
          },
          key:'id'
        }
      }
    },{
      freezeTableName:true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('order_item');
  }
};
