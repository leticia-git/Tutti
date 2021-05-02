module.exports = (sequelize, DataType) => {
    const Cart = sequelize.define('Cart', {
      id:{
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
          type:DataType.STRING,
          allowNull:false
      },
      price:{
        type: DataType.FLOAT,
        allowNull:false
      },
      quantity:{
        type: DataType.INTEGER,
        allowNull:false
      },
      itemTotal:{
        type: DataType.FLOAT,
        allowNull:false
      },
      userId:{
        type: DataType.INTEGER,
        allowNull:false
      },
      productId:{
        type: DataType.INTEGER,
        allowNull:false
      }
    },{
      tableName:"cart",
      timestamps:false
    });
  
    return Cart
  }