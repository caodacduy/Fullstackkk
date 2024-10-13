const express = require('express')
require('dotenv').config()
const configViewEngine=require('./config/viewEngine')
const webRoutes=require('./routes/web')
const connection=require('./config/database')

const app = express()
const port = process.env.PORT ||8081



app.use(express.json( )); // Used to parse JSON bodies
app.use(express.urlencoded({extends:true} )); //Parse URL-encoded bodies 
//xong file controller se su dung req.body

//config template engine
configViewEngine(app)
//config static file
app.use('/',webRoutes)


connection.query(
  'SELECT * FROM Users u',
  function(err, results, fields) {
    console.log(" result",results); // results contains rows returned by server

  }
);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})