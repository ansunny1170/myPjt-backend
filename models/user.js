const Sequelize = require('sequelize')

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      userid: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING(50)
      },
      birth: {
        type: Sequelize.DATE
      },
      sex: {
        type: Sequelize.STRING(10)
      },
      phone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(50)
      },
      password: {
        type: Sequelize.STRING(50)
      },
    },{
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    })
  }
  // static associate(db)
}

// Sequelize.STRING //varchar(255)
// Sequelize.string(1234)//varchar(1234)
// Sequelize.integer//integer
// Sequelize.json//json column.PostrgreSQL, SQLite and MYSQL only
// Sequelize.jsonb//jsonb column. PostgreSQL only
// Sequelize.boolean//boolean