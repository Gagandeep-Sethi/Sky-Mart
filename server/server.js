
const express = require('express');
const app = express();
const productRouter = require('./routes/api');
const mongoose=require('mongoose')

const mongoDbUri="mongodb+srv://sky:test1234@cluster0.6fyzft3.mongodb.net/shoppingmart?retryWrites=true&w=majority"

mongoose.connect(mongoDbUri,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});



app.get('/', (req, res) => {
    res.send("hi");
});

app.use('/api', productRouter);
app.listen(5000, () => {
    console.log("Server started at port 5000");
});
