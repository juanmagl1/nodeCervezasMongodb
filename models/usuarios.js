const { Schema, model } = require('mongoose');

const UsuariosSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    apellidos: {
        type: String,
        required: [true, 'Los apellidos son obligatoria'],
        
    },
    nick: {
        type: String,
        required: [true, 'El nick es obligario'],
        unique:true
    },
    email: {
        type: String,
        required:[true,'El email es obligatorio'],
        match:[/.+\@.+\..+/,'El email tiene que ser correcto'],
        unique:true
    },
    contrasenna: {
        type: String,
        required:[true,'La contraseña es obligatoria'],
        minlength:[8,'La contraseña tiene que tener de longitud minima 8 caracteres']
    },
});



module.exports = model( 'Usuarios', UsuariosSchema );