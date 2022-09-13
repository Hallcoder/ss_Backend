const express = require('express');
const { db } = require('./lib/db');
const { Prouter } = require('./routes/permission');
const app = express();

app.use(express.json());
app.use('/permissions',Prouter);
app.listen(3000,() => {
    console.log('Listening on port 3000...')
})
db();