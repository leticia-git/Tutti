'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('order', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      distance:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      distancePrice:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      total:{
        type: Sequelize.FLOAT,
        allowNull:false
      },
      userAddressId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"user_address"
          },
          key:'id'
        }
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"user"
          },
          key:'id'
        }
      },
      paymentId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"payment"
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
    await queryInterface.dropTable('order');
  }
};
