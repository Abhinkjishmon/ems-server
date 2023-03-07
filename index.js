const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors({
    origin:'http://localhost:3000'
}))
server.use(express.json())

server.listen(8000,()=>{
    console.log('ems server started at 8000');
})