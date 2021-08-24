const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

// Drop tables and re-sync db
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// sample route
app.get("/", (req, res) => {
  res.json({ message: "Test Route 123" });
});

// Require API Routes
require("./routes/passion.routes")(app);
require("./routes/aboutMe.routes")(app);
require("./routes/techStackContent.routes")(app);
require("./routes/techStackItem.routes")(app);
require("./routes/contact.routes")(app);
require("./routes/project.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});