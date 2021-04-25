'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('delivery', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      received:{
        type: Sequelize.DATE,
        allowNull:false
      },
      delivered:Sequelize.DATE,
      courierId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"courier"
          },
          key:'id'
        }
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
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false
      }
    },{
      freezeTableName:true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('delivery');
  }
};
