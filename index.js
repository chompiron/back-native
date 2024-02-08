import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routers/index.js';
import coneccion from './config/config.js';

dotenv.config()


console.log(process.env.DATABASE)

const app = express();

coneccion();
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/app', route)

const port = process.env.PORT;

app.listen(port, ()=>{
   console.log(`Funciona en le puerto ${port}`)
})
