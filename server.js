const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('hey')
})

app.listen(80,()=>{
    console.log('server 80 start')
})