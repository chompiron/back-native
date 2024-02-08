import express from 'express';
import { crear, mostrar } from "../controllers/appController.js";

const route = express.Router();


route.post('/', crear);
route.get('/', mostrar);

export default route;



