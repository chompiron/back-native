import mongoose from "mongoose";



const coneccion = async ()=>{

    try {

        const db = await mongoose.connect(process.env.DATABASE);

        console.log(`Mongo Funcionanado en: ${db.connection.host} - ${db.connection.port}`)
        
    } catch (error) {
        throw Error('No Conectado a Monguito!!')
    }

}

export default coneccion;

