const { sequelize, Editora } = require('../models');

Editora.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)