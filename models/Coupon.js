module.exports = (sequelize, DataType) => {
    const Coupon = sequelize.define('Coupon', {
      id:{
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      type:{
        type: DataType.TINYINT,
        allowNull:false
      },
      name:{
          type: DataType.STRING,
          allowNull:false,
          unique:true
      },
      discount:{
        type: DataType.FLOAT,
        allowNull:false
      },
      status:{
        type: DataType.TINYINT,
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
      tableName:"coupon",
      timestamps:true
    });
    
    Coupon.associate = (models) =>{
        Coupon.hasMany(models.Payment,{
          foreignKey:'couponId',
          as:'payment'
        });
    };
  
    return Coupon
  }