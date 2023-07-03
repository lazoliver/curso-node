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
  }
};
