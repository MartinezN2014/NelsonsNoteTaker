// dependencies
const path = require("path");
const fs = require("fs");

//npm package that generates IDs based on the current time
const uniqid = require("uniqid");

// routing
module.exports = (app) => {
  // GET /api/notes should read the db.json file and return all saved notes as JSON.
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });

  app.post("/api/notes", (req, res) => {
    let db = fs.readFileSync("db/db.json");
    db = JSON.parse(db);
    res.json(db);
    // creating body for note
    let userNote = {
      title: req.body.title,
      text: req.body.text,
      // creating unique id for each note
      id: uniqid(),
    };
    // pushing created note to be written in the db.json file
    db.push(userNote);
    fs.writeFileSync("db/db.json", JSON.stringify(db));
    res.json(db);
  });
};
