import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Connection from './connection/Db.js';
import Defaultdata from './Default.js';
import route from './route/Route.js';
//initialising express
const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use('/',route);

const PORT=8000;
Connection();
app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`));
Defaultdata();
