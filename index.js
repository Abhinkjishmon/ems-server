const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')

const server = express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())

server.listen(8000,()=>{
    console.log('ems server started at 8000');
})

//get all contact api
server.get('/get-all-employees',(req,res)=>{
    logic.allEmployees()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})