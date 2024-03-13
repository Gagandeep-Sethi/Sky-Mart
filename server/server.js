
const express = require('express');
const app = express();
const productRouter = require('./routes/product');
const userRouter=require('./routes/user')
const mongoose=require('mongoose')
require('dotenv').config();
app.use(express.json());        //this middleware makes the json data available for the req.body

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// })
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/user',userRouter)
app.use('/api/product', productRouter);
app.listen(process.env.PORT);
