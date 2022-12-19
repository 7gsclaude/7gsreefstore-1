const express = require("express");
const app = express();
const ejs = require("ejs");
const Coral = require("./models/corals"); //i can remove the .js from this file sicnce im turning that file into a schema 
const port = 3000;
const methodOverride = require("method-override");
app.set("view engine", "ejs"); //THIS LETS ME CHOP OFF .EJS from files 
//i may need to require mongoose in this file 
const mongoose = require('mongoose')
//configs
require('dotenv').config(); //needs to be above mongoose 
mongoose.connect(process.env.DATABASE_URI); // should pull .env file 
const db = mongoose.connection;


//error and working management 
db.on('error',(err)=> console.log('Mongo has found an error: ' + err.message));
db.on('connected', () => console.log(`Connect to MongoDB on ${db.host}:${db.port}`))
// db.get('collection') /// i should be adding a collection line 
db.on("collection", ()=> console.log('collection added'))

// middleware
app.use(express.urlencoded({ extended: false }));

// induces

//i

app.get("/7gsreef", (req, res) => {
  Coral.find({}, (err, coral) => {
    //grabs all corals on this line
    res.render("index", { coral }); //renders them on this page //just added capitolized coral 
    console.log(err);
  });
});
// i can begin to remove .ejs on the end of files 

//n
//d
//u
//c

app.post("/7gsreef", (req, res) => {
  req.body.completed = req.body.completed === "on"; // true or false ternary expresion 
  Coral.create(req.body, (err, coral) => {
 console.log(err); 
    res.redirect("/7gsreef");
       
  });
  
}); 





//listener
app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
