
const express = require('express');
const app = express();
const productRouter = require('./routes/api');
const mongoose=require('mongoose')
require('dotenv').config();



mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
    res.send("hi");
});

app.use('/api/product', productRouter);
app.listen(5000, () => {
    console.log("Server started at port 5000");
});
