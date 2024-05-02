const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log('Welcome Emmanuel')
}
);
//1rd End point
app.get('/string',(req,res)=>{
    res.send('Get some fruits!')
})  
//2nd Endpoint
app.get('/object', (req,res)=> {
    res.send({id:1,
            message: "My favourites fruits"
    } )
})
//3rd Endpoint
app.get('/array', (req,res)=>{
    res.send(['Apple', 'MAngo', 'Banana'])
})