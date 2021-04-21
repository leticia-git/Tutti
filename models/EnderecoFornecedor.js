module.exports = (sequelize, DataType) => {
  const EnderecoFornecedor = sequelize.define('EnderecoFornecedor', {
    id:{
      type:DataType.INTERGER,
      primaryKey:true,
      autoIncrement:true
    },
    logradouro:{ 
      type: DataType.STRING,
      allowNull:false},
    numero:{
      type: DataType.STRING,
      allowNull:false
    },
    bairro:{
      type: DataType.STRING,
      allowNull:false
    },
    complemento:DataType.STRING,
    cep:{
      type: DataType.STRING,
      allowNull:false
    },
    cidade:{
      type: DataType.STRING,
      allowNull:false
    },
    estado:{
      type: DataType.STRING,
      allowNull:false
    },
    fk_fornecedor_endereco:DataType.INTERGER
  },{
    tableName:"endereco_fornecedor",
    timestamps:true
  })
  
  EnderecoFornecedor.associate = (model) =>{
    EnderecoFornecedor.belongsTo(model.Fornecedor,{
      foreignKey:"fk_fornecedor_endereco",
      as:'fornecedor'
    })
  }

  return EnderecoFornecedor;
}