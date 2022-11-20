const express = require('express')
const app = express()
const Port = 3400



app.get('/',(req,res)=>{
    res.send(`${Port}`)
})



app.listen(Port,()=>{
    console.log('deneme')
})