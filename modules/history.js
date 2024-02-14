/*microservicio para crear el crud del historial delictivo de las personas de la galaxia */

const express = require("express");
const history = express.Router();
const cnx = require("./bdata");

/* Desarrollo del crud */

//Consultar
history.get("/history/listing",(req,res)=>{
    let sql = "SELECT * FROM history order by fecha";

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
history.get("/history/listing/:id",(req,res)=>{
    let id= req.params.id;
    let sql = "SELECT * FROM history WHERE id="+id;
    //cnx.query("SELECT * FROM history where id = ?",id,(error,data))

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
history.post("/history/create",(req,res)=>{
    let frmData ={
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        nota: req.body.nota,
      
    } 
   
    cnx.query("INSERT INTO history set ?",frmData,(error,data)=>{
    try{
        if(!error)
        {
            res.status(200).send("good")
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

//actualizar un registro
history.put("/history/update/:id",(req,res)=>{
    let id = req.params.id; //parametro
    let frmData ={
        descripcion: req.body.descripcion,
        date: req.body.date,
        note: req.body.note,
    } 
    cnx.query("UPDATE history set ? WHERE id=?",[frmData,id],(error,data)=>{
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

history.delete("/people/deleteid/:id",(req,res)=>{
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


module.exports = history; 