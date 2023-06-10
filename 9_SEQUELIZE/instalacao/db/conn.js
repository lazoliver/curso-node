const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "19161774@", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conected!");
} catch (err) {
  console.log(`Not connected, database error: ${err}`);
}

module.exports = sequelize;
