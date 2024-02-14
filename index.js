const express = require("express");
const cors=require("cors");
const app = express();
const port = 3000;
const md_fs= require("fs")


app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())
//rutas de la app 
//microservicio people
app.use("/",require("./modules/people"));
app.use("/",require("./modules/history"));

app.listen(port,()=>{
    console.log(`app encendida en el port: ${port}`);
})