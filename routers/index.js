import express from 'express';
import { crear, mostrar } from "../controllers/appController.js";

const route = express.Router();


route.get('/', crear);
route.get('/', mostrar);

export default route;



