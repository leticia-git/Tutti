module.exports = (sequelize, DataType) => {
  const UserAdress = sequelize.define('UserAdress', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    road:{ 
      type: DataType.STRING,
      allowNull:false},
    number:{
      type: DataType.STRING,
      allowNull:false
    },
    district:{
      type: DataType.STRING,
      allowNull:false
    },
    complement:DataType.STRING,
    cep:{
      type: DataType.STRING,
      allowNull:false
    },
    city:{
      type: DataType.STRING,
      allowNull:false
    },
    state:{
      type: DataType.STRING,
      allowNull:false
    },
    addressee:{
      type: DataType.STRING,
      allowNull:false
    },
    fone:{
      type: DataType.STRING,
      allowNull:false
    },
    userId:{
      type:DataType.INTEGER,
      allowNull: false
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
    tableName:"userAddresses",
    timestamps:true
  })
  
  UserAdress.associate = (model) =>{
    UserAdress.belongsTo(model.User,{
      foreignKey:"userId",
      as:'user'
    })
  }

  return UserAdress;
}