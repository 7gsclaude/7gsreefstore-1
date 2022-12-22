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
db.on("collection", ()=> console.log('collection added')) // adds collection of data 

// middleware
app.use(express.urlencoded({ extended: true })); //if i set this to true, i can work wth objects that are in the ejs files. 
app.use(methodOverride("_method"));

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


////n
//logs a coral i believe
app.get("/7gsreef/new", (req, res) => {
  res.render("new");
}); 

//d

app.delete("/7gsreef/:id", (req, res) => {
  Coral.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(err);
      res.redirect("/7gsreef");
    } else {
      res.redirect("/7gsreef");
    } 
  });
});


//u

app.put('/7gsreef/:id', (req, res) => {
  let newNames = {
    name: req.body.name,
    difficulty: req.body.difficulty,
    img: req.body.img,
}

  Coral.findByIdAndUpdate(req.params.id, req.body, () => {  

        res.redirect('/7gsreef')
  })
  console.log(newNames);
})



//c

app.post("/7gsreef", (req, res) => {
  Coral.create(req.body, (err, coral) => {

 console.log(err); 
    res.redirect("/7gsreef");
       
  });


  console.log(req.body);

}); 

//edit 
app.get('/7gsreef/:id/edit', (req, res) => {
  Coral.findById(req.params.id, (err, coral) => {
    res.render("edit", {coral});
     console.log(coral); 
  });

});

//show 
app.get("/7gsreef/:id", (req, res) => {
  Coral.findById(req.params.id, (err, coral) => {
    res.render("show", { coral });
  });
  //image tags dont like to be contained by other tags like ps

});

//listener
app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});


//i use c.name to get the nameof the coral to display whenever people want to  click 