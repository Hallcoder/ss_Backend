const express = require('express');
const { db } = require('./lib/db');
const { Prouter } = require('./routes/permission');
const cors = require('cors');
const { Urouter } = require('./routes/user');
const app = express();

app.use(express.json());
app.use(function(req,res,next){
    cors({origin:req.headers.origin})
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST')
    res.header('Access-Control-Allow-Headers', 'X-Request-With,Origin,Accept,Content-Type,X-HTTP-Method-Override')
    res.header('Access-Control-Allow-Credentials', true)
    next()
})
app.use('/permissions',Prouter);
app.use('/user',Urouter);
db(app);