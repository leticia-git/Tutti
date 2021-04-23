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
    }
  },{
    tableName:"payments",
    timestamps:false
  });

  Payment.associate = (models) =>{
    Payment.belongsTo(models.UserAddress,{
      foreignKey:'userAddressId',
      as:'paymentAddress',
    });
    Payment.belongsTo(models.UserData,{
      foreignKey:'userDataId',
      as:'userdata'
    });
    Payment.belongsTo(models.Card,{
      foreignKey:'cardId',
      as:'card'
    });
    Payment.belongsTo(models.Coupon,{
      foreignKey:'couponId',
      as:'coupon'
    });
    Payment.hasOne(models.Order,{as:'order'});
  }

  return Payment
}