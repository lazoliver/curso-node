module.exports = class AuthController {
  static async login(req, res) {
    await res.render("auth/login");
  }
  static async register(req, res) {
    await res.render("auth/register");
  }
};
