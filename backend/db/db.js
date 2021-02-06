import Sequelize from "sequelize"

const config={
db:"api",
userName:"postgres",
password:"zeki"
}

export  const db = new Sequelize(config.db, config.userName, config.password, {
  host: 'localhost',
  dialect:'postgres'
  });
