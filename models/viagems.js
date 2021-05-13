const db = require('./db')

const viagems = db.sequelize.define('viagems',{
    id_viagem:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'clientes',
          key: 'c_cpf'
        }
    },
    id_motorista: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'motoristas',
          key: 'c_cpf'
        }
    },
    avaliacao_motorista:{
        type: db.Sequelize.FLOAT,
        
    },
    avaliacao_cliente:{
        type: db.Sequelize.FLOAT,
        
    },
    destino:{
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.STRING
    },
    valor:{
        type: db.Sequelize.FLOAT
    },
    tipo_viagem:{
        type: db.Sequelize.STRING
    }
  
});

//Post.sync({force:true})

module.exports = viagems