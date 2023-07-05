const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts", "root", "2P7qZ5aR", {
  host: "127.0.0.1",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Database connected!");
} catch (err) {
  console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize;
