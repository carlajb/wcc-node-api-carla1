// model da tabela de artigos

//const { Sequelize } = require("sequelize/types");


//titulo
//descricao (corpo do artigo)
// e se foi publicado

module.exports = (sequelizeDatabase, Sequelize) => {
    const Artigo = sequelizeDatabase.define("artigos",{
        titulo:{
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        publicado: {
            type: Sequelize.BOOLEAN
        }
    });

    return Artigo;
}

