const express = require ('express');
const app = express();
const port = 5500;

app.listen((port),()=> console.log('el server esta corriendo en el port',port)
);