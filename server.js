// var fs = require('fs')
// var os = require('os')

// var user =  os.userInfo()
// // console.log(user.username)

// fs.appendFile('greeting.txt', "Hello " + user.username + "!\n", ()=>{
//   console.log('file created')
// })

// console.log(fs)

// const notes =  require('./notes.js');
// var _ = require('lodash');

// console.log('server file is available');

// var age = notes.age;
// var role = notes.role
// var result = notes.addNum(age+18, 10 )

// console.log(age)
// console.log(role)
// console.log(result)

// var data = ['person', 'person', 1,2,1,2,'name', 'age', '2'];
// var filter = _.uniq(data)
// console.log(filter)
// console.log(_.isNumber(23))

// const jsonString = '{"name":"john", "age":30, "City":"New York"}'
// const jsonObject = JSON.parse(jsonString)
// console.log(jsonObject)

//! JSON.parse()  //convert json string to object
//! JSON.stringify()  //convert object to json

// const objstring = {name:'aakash', 'age':24, 'city':'jaipur'}
// const objToJson = JSON.stringify(objstring)
// console.log(objToJson)

//? creating express server

const express = require("express");
const db = require("./db");
const Person = require("./models/person");
const bodyParser = require("body-parser");
const menuItem = require("./models/menuItem.js");
const personRoutes = require("./routes/personRoutes.js");
const menuRoutes = require("./routes/menuItemRoutes.js");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000


app.use(bodyParser.json()); //req.body

app.get("/", (req, res) => {
  res.send("Welcome to our hotel");
});



app.use("/person", personRoutes)
app.use("/menu", menuRoutes)



db();  //connecting database to server
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
