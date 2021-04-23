module.exports = (sequelize, DataType) => {
  const Order = sequelize.define('Order', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    distance:{
      type: DataType.FLOAT,
      allowNull:false
    },
    distancePrice:{
      type: DataType.FLOAT,
      allowNull:false
    },
    total:{
      type: DataType.FLOAT,
      allowNull:false
    },
    userAdressId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    userId:{
      type: DataType.INTEGER,
      allowNull:false
    },
    paymentId:{
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
    tableName:"orders",
    timestamps:true
  });
  
  Order.associate = (models) =>{
    Order.belongsToMany(models.Courier,{
      foreignKey:'orderId',
      as:'delivery',
      through:models.Delivery
    });
    Order.belongsToMany(models.Product,{
      foreignKey:'orderId',
      as:'product',
      through:models.OrderItem
    });
    Order.belongsTo(models.User,{
      foreignKey:'userId',
      as:'user'
    });
    Order.belongsTo(models.Payment,{
      foreignKey:'paymentId',
      as:'delivery'
    });
    Order.belongsTo(models.UsarAddress,{
      foreignKey:'userAddressId',
      as:'deliveryAddress'
    });
  }

  return Order
}