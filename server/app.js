const express=require("express");
const bodyParser=require('body-parser');
const staticRouter=require("./Router/static");

const app=express();
const cors=require('cors');
global.__basedir = __dirname;
app.use(cors({origin:"*"}));
app.use(bodyParser.json());

app.use("/static",staticRouter);


module.exports=app;
