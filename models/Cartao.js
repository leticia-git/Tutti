module.exports = (sequelize, DataType) => {
  const Cartao = sequelize.define('Cartao', {
    id:{
      type:DataType.INTERGER,
      primaryKey:true,
      autoIncrement:true
    },
    bandeira:DataType.STRING,
    numero_cartao:{
      type: DataType.STRING,
      allowNull:false
    },
    nome_cartao:{
      type: DataType.STRING,
      allowNull:false
    },
    validade:{
      type: DataType.STRING,
      allowNull:false
    },
    fk_dado_cartao:{
    type:DataType.INTERGER,
    allowNull:false
    }
  },{
    tableName:"cartoes",
    timestamps:true
  });
  
  Cartao.associate = (models) =>{
    Cartao.belongsTo(models.Dado,{
      foreignKey:'fk_dado_cartao',
      as:'cliente'
    })
  };

  return Cartao
}