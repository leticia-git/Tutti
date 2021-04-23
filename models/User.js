module.exports = (sequelize, DataType) => {
  const User = sequelize.define('User', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    name:{
      type: DataType.STRING,
      allowNull:false
    },
    email:{
      type: DataType.STRING,
      allowNull:false,
      unique:true
    },
    password:{
      type: DataType.STRING,
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
    tableName:"users",
    timestamps:true
  })
  
  User.associate = (model) =>{
    User.hasOne(model.UserData,{as:'userData'})
    User.hasMany(model.Card,{as:'card'});
    User.hasMany(model.Order,{as:'order'});
    User.hasMany(model.UserAddress,{as:'userAddress'});
    User.hasMany(model.Comment,{as:'comment'});
  }

  return User
}