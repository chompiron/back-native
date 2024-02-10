import express from 'express';
import { actualizar, borrar, crear, mostrar } from "../controllers/appController.js";

const route = express.Router();


route.post('/', crear);
route.get('/', mostrar);
route.delete('/:id', borrar)
route.put('/:id', actualizar)
export default route;



