module.exports = (sequelize, DataType) => {
  const Provider = sequelize.define('Provider', {
    id:{
      type:DataType.INTERGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    name:{
      type:DataType.STRING,
      allowNull:false
    },
    cnpjCpf:{
      type: DataType.STRING,
      allowNull:false
    },
    description:DataType.TEXT,
    responsible:{
      type: DataType.STRING,
      allowNull:false
    },
    fone:{
      type: DataType.STRING,
      allowNull:false
    },
    register:{
      type: DataType.TINYINT,
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
    tableName:"providers",
    timestamps:true
  });

  Provider.associate = (models) =>{
    Provider.hasOne(models.ProviderAddress,{as:'providerAdress'});
    Provider.hasMany(models.Product,{as:'product'})
  }

  return Provider;
}