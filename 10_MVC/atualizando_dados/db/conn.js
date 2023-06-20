const { Sequelize } = require("sequelize");

/* parâetros de conexão */
const sequelize = new Sequelize("mvc", "root", "19161774@", {
  host: "localhost",
  dialect: "mysql",
});

/* conectando ao banco de dados */
try {
  sequelize.authenticate();
  console.log("Database connected!");
} catch (err) {
  console.log(err);
}

module.exports = sequelize;
