const Produto = (sequelize, DataTypes) => {
    const produto = sequelize.define(
      'Produto',
      {
        id_produto: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: true
        },
        descricao: {
          type: DataTypes.STRING,
          allowNull: true
        },
        preco: {
          type: DataTypes.FLOAT,
          allowNull: true
        },
        fk_categoria: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        imagem: {
          type: DataTypes.STRING,
          allowNull: true
        },
        fk_editora: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        tableName: "produto",
        timestamps: false
      }
    )
    
    produto.associate = (models) => {
      produto.belongsTo(models.Categoria, {
        foreignKey: 'fk_categoria',
        as: 'categoria'
      });
    produto.belongsTo(models.Editora, {
        foreignKey: 'fk_editora',
        as: 'editora'
      });
    }
  
    return produto;
  }
  
  module.exports = Produto;