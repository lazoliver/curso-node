const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mvc", "root", "19161774@", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Database MVC connected!");
} catch (err) {
  console.log(`Database error: ${err}`);
}

module.exports = sequelize;