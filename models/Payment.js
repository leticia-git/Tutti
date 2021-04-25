module.exports = (sequelize, DataType) => {
  const Payment = sequelize.define('Payment', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    type:{
      type: DataType.INTEGER,
      allowNull:false
    },
    status:{
      type: DataType.TINYINT,
      allowNull:false
    },
    userAddressId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    userDataId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    cardId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    couponId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    createdAt:{
      type:DataType.DATE,
      allowNull:false
    },
    updatedAt:{
      type:DataType.DATE,
      allowNull:false
    }
  },{
    tableName:"payment",
    timestamps:true
  });

  Payment.associate = (models) =>{
    Payment.belongsTo(models.UserAddress,{
      as:'userAddress',
    });
    Payment.belongsTo(models.UserData,{
      as:'userData'
    });
    Payment.belongsTo(models.Card,{
      as:'card'
    });
    Payment.belongsTo(models.Coupon,{
      as:'coupon'
    });
    Payment.hasOne(models.Order,{
      foreignKey:'paymentId',
      as:'order'});
  }

  return Payment
}