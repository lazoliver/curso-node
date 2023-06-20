const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");

const port = 3000;
const app = express();

const conn = require("./db/conn");

// models
const Tought = require("./models/Tought");
const User = require("./models/User");

// handlebars
app.engine("handlebats", exphbs.engine);
app.set("view engine", "handlebars");

// read body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// public path
app.use(express.static("public"));

// session middleware
app.use(
  session({
    name: "session",
    secret: "our_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require("path").join(require("os").tmpdir(), "sessions"),
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Data(Date.now() + 360000),
      httpOnly: true,
    },
  })
);

// flash messages
app.use(flash());

// set session to res
app.use((req, res, next) => {
  if (req.session.userid) {
    res.locals.session = req.session;
  }

  next();
});

// database
conn
  .sync()
  .then(() => {
    // server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(`Server connection error: ${err}`);
  });
