module.exports = (sequelize, DataType) => {
  const Fornecedor = sequelize.define('Fornecedor', {
    id:{
      type:DataType.INTERGER,
      primaryKey:true,
      autoIncrement:true
    },
    nomeFantasia:{
      type:DataType.STRING,
      allowNull:false
    },
    cnpjCpf:{
      type: DataType.STRING,
      allowNull:false
    },
    descricao:DataType.TEXT,
    responsavel:{
      type: DataType.STRING,
      allowNull:false
    },
    telefone:{
      type: DataType.STRING,
      allowNull:false
    },
    fk_enderecoFornecedor:DataType.INTERGER
  },{
    tableName:"fornecedores",
    timestamps:true
  });
  
  Fornecedor.associate = (model) =>{
    Fornecedor.belongsTo(model.EnderecoFornecedor,{
      foreignKey:"fk_enderecoFornecedor",
      as:'enderecoFornecedor'
    })
  };

  return Fornecedor;
}