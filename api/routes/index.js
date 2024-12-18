
//const config = require("../config")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'ozi' , config });
// });

var express = require('express');
var router = express.Router();

const fs = require("fs");

let routes = fs.readdirSync(__dirname); //"./routes"

for (let route of routes) {
  if (route.includes(".js") && route != "index.js") {
    //router.use('/auditlogs', require('./auditlogs')) 
    router.use("/"+route.replace(".js", ""), require('./'+route));
  }
}

module.exports = router;