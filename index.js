const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model/user');

mongoose.connect('mongodb+srv://sam:iwtbiG@5@cluster0-c9u0q.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('mongo db connected');
    })
    .catch((err)=>{
        console.log(err);
    });
app.listen(PORT,()=>{
    console.log(`server is connected at port ${PORT}`);
});


app.use(cors({ origin: '*' }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.get('/',(req,res)=>{
    var user = new User({
        name: 'sameer',
        id: 1
    });
    user.save()
    .then((user)=>{
        res.send({
            msg: `user has been created ${user.name}`
        });
    })
    .catch((err)=>{
        console.log('error creating the user')
    })
    
})