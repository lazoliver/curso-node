const Tought = require("../models/Tought");
const User = require("../models/User");

module.exports = class ToughtController {
  static async showToughts(req, res) {
    res.render("toughts/home");
  }

  static async dashboard(req, res) {
    const userid = req.session.userid;

    const user = await User.findOne({
      where: { id: userid },
      include: Tought,
      plain: true,
    });

    if (!user) {
      res.redirect("/login");
    }

    console.log(user.Tought);

    res.render("toughts/dashboard");
  }

  static async createTought(req, res) {
    res.render("toughts/create");
  }
};
