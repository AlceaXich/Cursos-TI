const express = require('express');
const req = require('express/lib/request');
const app = express();

app.get('/',(req, res) => {
    res.send('Hello worl, I am AlceaXich using nodemon :D');
});

app.listen(3000, console.log('Server started on port 3000'));