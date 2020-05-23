const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
app.listen(PORT,()=>{
    console.log(`server is connected at port ${PORT}`);
});
app.get('/',(req,res)=>{
    res.send({
        msg: 'the page you\'ve requested is not found'
    });
})