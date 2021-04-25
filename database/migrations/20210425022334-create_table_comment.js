'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comment', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      comment:{
        type: Sequelize.TEXT,
      },
      rating:Sequelize.FLOAT,
      userId:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName:'user'
          },
          key:'id'
        }
      },
      productId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:'product'
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
    },
    {
      freezeTableName:true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comment');
  }
};
