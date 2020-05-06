const Categoria = (sequelize, DataTypes) => {
    const categoria = sequelize.define(
      'Categoria',
      {
        id_categoria: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: true
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: true
        },
      },
      {
        tableName: "Categoria",
        timestamps: false
      }
    )
    
    categoria.associate = (models) => {
      categoria.hasMany(models.Produto, {
        foreignKey: 'fk_categoria',
        as: 'categoria'
      });
    }
  
    return categoria;
  }
  
  module.exports = Categoria;