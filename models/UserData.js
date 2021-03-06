module.exports = (sequelize, DataType) => {
  const UserData = sequelize.define('UserData', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    fullname:{
      type: DataType.STRING,
      allowNull:false
    },
    cpf:{
      type: DataType.STRING,
      allowNull:false,
      unique:true
    },
    fone:{
      type: DataType.STRING,
      allowNull:false
    },
    birth:{
      type: DataType.STRING,
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
    tableName:"user_data",
    timestamps:true
  });
  
  UserData.associate = (model) =>{
    UserData.belongsTo(model.User,{as:'user'})
    UserData.hasMany(model.Payment,{
      foreignKey:'userDataId',
      as:'payment'
    })
  };

  return UserData;
}