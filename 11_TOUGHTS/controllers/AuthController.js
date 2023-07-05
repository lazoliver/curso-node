const User = require("../models/User");

const bcrypt = require("bcryptjs");

module.exports = class AuthController {
  static async login(req, res) {
    await res.render("auth/login");
  }
  static async register(req, res) {
    await res.render("auth/register");
  }

  static async registerPort(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    if (password != confirmpassword) {
      req.flash("message", "As senhas não são iguais.");
      res.render("auth/register");
      return;
    }

    const checkIfUserExists = await User.findOne({ where: { email: email } });

    if (checkIfUserExists) {
      req.flash("message", "O e-mail já está em uso!");
      res.render("auth/register");
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = {
      name,
      email,
      password: hashedPassword,
    };

    await User.create(user);

    try {
      const createdUser = await User.create(user);
      req.session.userid = createdUser.id;
      req.flash("message", "Cadastro realizado com sucesso!");
      req.session.save(() => {
        res.redirect("/");
      });
    } catch (err) {
      console.log(err);
    }
  }

  static async logout(req, res) {
    req.session.destroy();
    req.redirect("/login");
  }
};
