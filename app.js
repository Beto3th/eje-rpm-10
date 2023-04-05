//Crear el servidor 
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;


//Configuraciones
app.use(express.static('public')); //Para que busque el index.html
/*app.get("/",(req, res)=>{
    res.send("En teoria es el index.html");
})*/
app.get('*',(req,res)=>{
    //res.send('404 | Pagina no encontrada 404.html');
    res.sendFile(__dirname + '/public/404.html');
})

//Proceso
app.listen(port,()=>{
    console.log("Servidor corriendo en el puerto: ", port)
})