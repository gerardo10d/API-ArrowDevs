// Hacer el import de express tradicional
// const express = require('express');

import Express from "express";

const app = Express()
app.use(Express.json()) // Función predefinida para facilitar (lectura de JSON?)

// Rutas de tipo GET
app.get("/vehiculos", (req, res)=>{
    console.log("alguien hizo get en la ruta /vehiculos"); // se muestra en terminal por ser back

    const vehiculos = [
        {nombre: 'Corolla', marca: 'Toyota', modelo:'2009'},
        {nombre: 'Allegro', marca: 'Mazda', modelo:'2005'},
        {nombre: 'Clio', marca: 'Renault', modelo:'2010'}
    ]
    res.send(vehiculos);
})

// Tipo POST
app.post("/vehiculos/nuevo", (req, res)=>{
    // Implementar código para crear vehículo en la BD
    console.log("Vehículo a crear ", req.body)
    res.send('Ok. Vehículo creado')
})

// Prender la aplicación, escuchar solicitudes en un puerto específico del servidor
// se coloca 5000 para el puerto
app.listen(5000, () =>{
    console.log("escuchando puerto 5000")
})
