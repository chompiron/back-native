import Datos from "../model/Datos.js"


const crear = async (req, res)=>{


    try {
        const dato = new Datos(req.body);

        const datoGuardado = await dato.save()

        return res.status(200).json({
            datoGuardado
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'No Conectaro o otro Error!!'
        })
    }
    
}


const mostrar = async (req, res)=>{

    let cliente = await Datos.find();

    return res.status(200).json({msg: cliente})

}




export  {
    crear,
    mostrar
}