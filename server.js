'use strict';

const express =require('express');
const path =require('path');
//Trae las funciones de buscar los directorios
//Constantes
const PORT = 8081;
//app --con esto inicioalizo el servidor , ya esta escuchando en el 8080

const app =express();
app.use(express.static(__dirname));
// ponenos los response y request, el propio get si resuelve la informacion del navegador y podria enviar una cockie
app.get('/',function(req,res){
//  res.send("Bienvenido a BBVA techUniversity&reg;\n") ahora para poner la web neecsito indicar donde esta el directiro
// busco el directorio y los uno con join para qu haga un solo path
  res.sendfile(path.join(__dirname + '/index.html'));
});
//para asegurame que funciona escucho
app.listen(PORT);
console.log('Express funcionando en BBVA tech en el puerto ' + PORT);
