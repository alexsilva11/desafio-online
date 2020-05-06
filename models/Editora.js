const Editora = (sequelize, DataTypes) => {
    const editora = sequelize.define(
      'Editora',
      {
        id_editora: {
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
        tableName: "editora",
        timestamps: false
      }
    )
    
    Editora.associate = (models) => {
      Editora.belongsTo(models.Editora, {
        foreignKey: 'fk_usuario',
        as: 'usuario'
      });
    }
  
    return editora;
  }
  
  module.exports = Editora;