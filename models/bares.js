const { Schema, model } = require('mongoose');

const BaresSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        //El unique se pone para que no haya 2 bares con ese nombre
        unique: true,
        minlength:[2, 'El nombre no puede ser menor a 2 caracteres']
    },
    Direccion: {
        type: String,
        required: [true, 'La Dirección es obligatoria'],
        
    },
    Telefono: {
        type: String,
        required: [true, 'El teléfono es obligario'],
        maxlength:[9,'El telefono tiene que tener 9 caracteres'],
        minlength:[9, 'El nombre no puede ser menor a 9 caracteres']
    },
    Ciudad: {
        type: String,
    },
});



module.exports = model( 'Bares', BaresSchema );