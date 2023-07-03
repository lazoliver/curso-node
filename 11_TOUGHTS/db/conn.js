const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts", "root", "19161774@", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Database connected!");
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
