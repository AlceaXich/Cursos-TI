const express = require('express');
const req = require('express/lib/request');
const app = express();

app.get('/',(req, res) => {
    res.json({msg: 'API Server is running',version: 1});
});

app.listen(3000, console.log('Server started on port 3000'));