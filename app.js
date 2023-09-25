const dotenv=require('dotenv')
const mongoose=require('mongoose')
const express = require('express')
const app = express();
const cors = require('cors')


dotenv.config({path: './config.env'});
require('./db/conn');

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
  }));
  

app.use(require('./router/auth'));

const PORT=process.env.PORT;

app.listen(PORT, ()=>{
    console.log("server running at port 4000");
})
