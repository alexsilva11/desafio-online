const { sequelize, Categoria } = require('../models');

Categoria.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)