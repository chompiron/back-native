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

const borrar = async (req, res)=>{

    const {id} = req.params
    //console.log(id)
    
    try {
        
        await Datos.findOneAndDelete({_id: id})

    } catch (error) {
        console.log(error)
    }
}

const actualizar = async (req, res, next)=>{

    const {id } = req.params;
    const {nombre, telefono, correo, empresa} = req.body;
    //(Nuveconsole.log(id);
     //console.log(req.body);
     await Datos.findOneAndUpdate({_id: id}, {nombre, telefono, correo, empresa}, {new: true});

     return res.status(200).json({msj: ''})

     

}




export  {
    crear,
    mostrar,
    borrar,
    actualizar
}