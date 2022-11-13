const db = require('../models/db')
const { response, request } = require('express');
const bares = require('../models/bares');



async function addBar(req = request, res = response) {
    //Cogemos los parametros que nos pasan por el body
    const { Nombre, Direccion, Telefono, Ciudad } = req.body;
    //Creamos un nuevo bar
    const bar = new bares({ Nombre, Direccion, Telefono, Ciudad });

    // Guardar en BD
    await bar.save();

    res.json({
        bar
    });
}

async function getBares(req, res) {
    const {Nombre, Telefono,Direccion,Ciudad} = req.query
    const query = {Nombre, Telefono,Direccion,Ciudad}
    for (const key in query) {
        if (query[key] === undefined) {
          delete query[key];
        }
      }
    const bar = await bares.find(query)
    res.json(bar)
}
async function getBar(req = request, res = response) {
    const id = req.params.Nombre
    const barElegido = await bares.find({ Nombre: id });
    if (barElegido.length) {
        res.json(barElegido);
    } else {
        res.json({ message: `El bar ${id} no existe` })
    }

}
async function deleteBar(req , res) {
    //Recuperamos el id
    const barId = req.params.id;
    //Borramos con el metodo deleteOne
    const borrado=await bares.deleteOne({ _id: barId });
    //Devolvemos de respuesta lo que nos da el metodo
    res.json(borrado);
}
async function editBar(req = request, res = response) {
    const Id = req.params.id;
    const barNuevo = req.body;
    const actualizaBar = await bares.updateOne({ _id: Id }, barNuevo);

    res.json(actualizaBar);
}
module.exports = { addBar,getBares,getBar,deleteBar,editBar}