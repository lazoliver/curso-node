const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "19161774@", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connected!");
} catch (err) {
  console.log(`Database error: ${err}`);
}

module.exports = sequelize;
