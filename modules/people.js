/*microservicio para crear el crud de las personas de la galaxia */

const express = require("express");
const people = express.Router();
const cnx = require("./bdata");

/* Desarrollo del crud */

//Consultar
people.get("/people/listing",(req,res)=>{
    let sql = "SELECT * FROM people order by lastname";

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
people.get("/people/listing/:id",(req,res)=>{
    let id= req.params.id;
    let sql = "SELECT * FROM people WHERE id="+id;
    //cnx.query("SELECT * FROM people where id = ?",id,(error,data))

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
people.post("/people/create",(req,res)=>{
    let frmData ={
        name: req.body.name,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        email: req.body.email,
        type: req.body.type,
    } 
   
    cnx.query("INSERT INTO people set ?",frmData,(error,data)=>{
    try{
        if(!error)
        {
            res.status(200).redirect('http://127.0.0.1:5500/api/index.html')
        }
        else{
            res.status(500).send(error)
        }
       
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

/**
 * Description placeholder
 * @date 2/19/2024 - 6:55:53 AM
 *@autor kevin alzate
 *@description actualiza las personas, recibe el id y la data del formulario body
 * @param {*} req
 * @param {*} res
 */

//actualizar un registro
people.put("/people/update/:id",
(req,res)=>{
    let id = req.params.id; //parametro
    let frmData ={
        name: req.body.name,
        lastname: req.body.lastname,
        nickname: req.body.nickname,
        email: req.body.email,
        type: req.body.type,
    } 
   

    
    cnx.query("UPDATE people set ? WHERE id=?",[frmData,id],(error,data)=>{
    try{
        res.status(200).send("Actualización exitosa")
    }
    catch (error){
        console.log(error);
        // throw `hay un error en la consulta: ${error}`
        res.status(404).send({
            id:error.id,
            mensaje:error.message,
        });
    }
    });
})




//eliminar por id 

people.delete("/people/deleteid/:id",(req,res)=>{
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


module.exports = people; 