const express = require('express');
const req = require('express/lib/request');
const app = express();
const connectDB = require('./config/db');

connectDB();

//Display all fruits
app.get('/fruits', (req,res) =>{
    res.json({ msg: 'showing all red fruits'});
});
//Display fruits by id
app.get('/fruits/:fruitsId', (req,res) => {
    res.json({ msg: 'fruit id is ' + req.params.fruitsId });
});
//Create new fruit
app.post('/fruits', (req,res) => {
    res.json({ msg: 'Creating fruits with post' });
});

//Edit fruit with id
app.put('/fruits/:fruitsId', (req,res) => {
    res.json({ msg: 'Editing fruits ' + req.params.fruitsId });
});

//Delete fruits by id
app.delete('/fruits/:fruitsId', (req,res) => {
    res.json({ msg: 'Deleting fruits ' + req.params.fruitsId });
});

//Welcome to index
app.get('/',(req, res) => {
    res.json({msg: 'API Server is running',version: 1});
});

app.listen(3000, console.log('Server started on port 3000'));