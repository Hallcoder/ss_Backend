const express = require('express');
const { db } = require('./lib/db');
const app = express();

app.listen(3000,() => {
    console.log('Listening on port 3000...')
})
db();