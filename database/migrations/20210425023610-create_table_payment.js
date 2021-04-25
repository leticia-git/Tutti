'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payment', { 
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      type:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      status:{
        type: Sequelize.TINYINT,
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
      userDataId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"user_data"
          },
          key:'id'
        }
      },
      cardId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"card"
          },
          key:'id'
        }
      },
      couponId:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:{
            tableName:"coupon"
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
    await queryInterface.dropTable('payment');
  }
};
