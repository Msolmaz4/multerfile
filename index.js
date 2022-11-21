const express = require('express')
const app = express()
const Port = 3400
const multer = require('multer')
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        //ilk deger hata genlde null yapariz
        cb(null,'images')
    },
    filename:(req,file,cb)=>{
        console.log(file)
    }
})




app.get('/',(req,res)=>{
    res.send(`${Port}`)
})



app.listen(Port,()=>{
    console.log('deneme')
})