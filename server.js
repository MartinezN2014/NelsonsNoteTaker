//Dependencies
const express = require("express");

//app uses express
const app = express();
const PORT = process.env.PORT || 3001;

//assk express to create a route for each file in the public folder
app.use(express.static("public"));
//middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes to route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
