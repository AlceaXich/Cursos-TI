const express = require('express');
const req = require('express/lib/request');
const app = express();
const connectDB = require('./config/db');
const Fruit = require('./models/fruitModel');

connectDB();
//middleware
app.use(express.json);

//Display all fruits
app.get('/fruits', async (req,res) =>{
    try {
        const fruits = await Fruit.find({});
        res.json(fruits);
    } catch (error) {
        console.log(error);
        
    }
});

//Display fruits by id
app.get('/fruits/:fruitsId', async(req,res) => {
    try {
        const fruit = await Fruit.findById(req.params.fruitsId);
        res.json(fruit);
    } catch (error) {
        console.log(error);
    }
});

//Create new fruit
app.post('/fruits', async(req,res) => {
    try {
        await Fruit.create({
            fruitname: req.body.fruitname,
            name: req.body.name,
        });
        res.json({ msg: 'fruit created successfully'});
    } catch (error) {
        console.log(error);
    }
});

//Edit fruit with id
app.put('/fruits/:fruitsId', async(req,res) => {
    try {
        await Fruit.findByIdAndUpdate(req.params.fruistid, {
            fruitname: req.body.fruitname,
            name: req.body.name,
        });
        res.json({msg: 'fruit updated successfully'});
    } catch (error) {
        console.log(error);
    }
    res.json({ msg: 'Editing fruits ' + req.params.fruitsId });
});

//Delete fruits by id
app.delete('/fruits/:fruitsId', async(req,res) => {
    try {
        await Fruit.findByIdAndDelete(req.params.fruitsId);
        res.json({ mgs: 'Fruit deleted'});
    } catch (error) {
        console.log(error);
    }
});

//Welcome to index
app.get('/',(req, res) => {
    res.json({msg: 'API Server is running',version: 1});
});

app.listen(3000, console.log('Server started on port 3000'));