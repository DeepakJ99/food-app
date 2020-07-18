var express = require('express')
var path = require('path')
var pathToPublic = path.join(__dirname,'../public')
var PORT = process.env.PORT || 3000

//creating express app
var app = express()

console.log(pathToPublic)
//delievering static content
app.use(express.static(pathToPublic))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'))
})

app.listen(PORT,()=>{
    console.log('Server up and running at '+PORT)
})

