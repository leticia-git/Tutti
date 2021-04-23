module.exports = (sequelize, DataType) => {
  const ProviderAddress = sequelize.define('ProviderAddress', {
    id:{
      type:DataType.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    road:{ 
      type: DataType.STRING,
      allowNull:false
    },
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
    providerId:{
      type: DataType.INTEGER,
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
    tableName:"providerAddressess",
    timestamps:true
  })
  
  ProviderAddress.associate = (models) =>{
    ProviderAddress.belongsTo(models.Provider,{
      foreignKey:'providerId',
      as:'provider'
    })
  }

  return ProviderAddress;
}