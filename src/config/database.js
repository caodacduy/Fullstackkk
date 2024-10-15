// create the connection to database
require('dotenv').config()
const mysql = require('mysql2/promise')
///promise


// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port:process.env.DB_PORT,
//     password:process.env.DB_PASSWORD
//   });
//tranh limit time
  const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    
  });
  
module.exports=connection;