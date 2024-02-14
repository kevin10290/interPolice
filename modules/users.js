/*microservicio para crear el crud del historial delictivo de las personas de la galaxia */

const express = require("express");
const users = express.Router();
const cnx = require("./bdata");

/* Desarrollo del crud */

//Consultar
users.get("/users/listing",(req,res)=>{
    let sql = "SELECT * FROM users";

    cnx.query(sql,(error,data)=>{
    try{
        res.status(200).send(data)
    }
    catch (error){
        console.log(error);
/*         res.status(404).send({
            id:error.id,
            mensaje:error.message,
        }); */
    }
    });
})

//consultar por id 
users.get("/users/listing/:id",(req,res)=>{
    let id= req.params.id;
    let sql = "SELECT * FROM users WHERE id="+id;
    //cnx.query("SELECT * FROM users where id = ?",id,(error,data))

    cnx.query(sql,(error,data)=>{
    try{
        res.status(200).send(data)
    }
    catch (error){
        console.log(error);
        // throw `hay un error en la consulta: ${error}`
/*         res.status(404).send({
            id:error.id,
            mensaje:error.message,
        }); */
    }
    });
})

//insertar una persona
users.post("/users/create",(req,res)=>{
    let frmData ={
        name: req.body.name,
        lastname:req.body.lastname,
        position:req.body.position,
        email: req.body.email,
        password:req.body.password ,
        photo:req.body.photo
      
    } 
   
    cnx.query("INSERT INTO users set ?",frmData,(error,data)=>{
  
        if(!error)
        {
            res.status(200).send("good")
        }
        else{
            res.status(500).send(error)
        }
        
    });
})

//actualizar un registro
users.put("/users/update/:id",(req,res)=>{
    let id = req.params.id; //parametro
    let frmData ={
        descripcion: req.body.descripcion,
        date: req.body.date,
        note: req.body.note,
    } 
    cnx.query("UPDATE users set ? WHERE id=?",[frmData,id],(error,data)=>{
    try{
        res.status(200).send("Actualización exitosa")
    }
    catch (error){
        console.log(error);
        // throw `hay un error en la consulta: ${error}`
/*         res.status(404).send({
            id:error.id,
            mensaje:error.message,
        }); */
    }
    });
})




//eliminar por id 
//eliminar fisico de una bd

users.delete("/people/deleteid/:id",(req,res)=>{
    let id= req.params.id;
    let sql = "DELETE FROM people WHERE id="+id;
    //cnx.query("SELECT * FROM people where id = ?",id,(error,data))

    cnx.query(sql,(error,data)=>{
    try{
        res.status(200).send("Borrado Exitoso")
    }catch (error){
        console.log(error);
        // throw `hay un error en la consulta: ${error}`
/*         res.status(404).send({
            id:error.id,
            mensaje:error.message,
        }); */
    }
    });
})


module.exports = users; 