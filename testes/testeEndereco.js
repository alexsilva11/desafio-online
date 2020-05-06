const { sequelize, Endereco } = require('../models');

Endereco.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)