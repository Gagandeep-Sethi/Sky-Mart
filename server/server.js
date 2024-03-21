
const express = require('express');
const app = express();
const productRouter = require('./routes/product');
const userRouter=require('./routes/user')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config();
app.use(express.json());        //this middleware makes the json data available for the req.body

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// })
const whitelist = ['https://skymart05.vercel.app',];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
app.get('/',(req,res)=>{
  res.send("hi")
})
app.use('/api/user',userRouter)
app.use('/api/product', productRouter);
app.listen(process.env.PORT);
