/* Modulo que gestiona la conexion con la base de datos */

const mysql = require("mysql2");

// cadena de conexion 

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'interpolice'
  });


  connection.connect((error)=>{
    if(error){
        console.log(error);
       //  throw "database connection error!"
    }
        else{
            console.log("Connection Succesful!");
        }

  });

  module.exports = connection;