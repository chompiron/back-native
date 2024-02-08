import mongoose from "mongoose";



const datosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    empresa:{
        type: String,
        required: true
    }
})


const Datos = mongoose.model('Datos', datosSchema);

export default Datos;
