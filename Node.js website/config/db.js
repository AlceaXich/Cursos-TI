const mongoose = require('mongoose');

const DB_URI = 
'mongodb+srv://myusername:123abc@cluster0.n1o1d8o.mongodb.net/mynodejsdb?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log('Database connected');
    } catch (error) {
        console.log('Error while connecting' + error.message);
    }
};

module.exports = connectDB;