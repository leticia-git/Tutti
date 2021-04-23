module.exports = (sequelize, DataType) => {
  const Card = sequelize.define('Card', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    flag:DataType.STRING,
    cardNumber:{
      type: DataType.STRING,
      allowNull:false,
      unique:true
    },
    cardholder:{
      type: DataType.STRING,
      allowNull:false
    },
    expiration:{
      type: DataType.DATE,
      allowNull:false
    },
    userId:{
    type:DataType.INTEGER,
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
    tableName:"cards",
    timestamps:true
  });
  
  Card.associate = (models) =>{
    Card.belongsTo(models.User,{
      foreignKey:'userId',
      as:'user'
    })
    Card.hasMany(models.Payment,{as:'payment'})
  };

  return Card
}