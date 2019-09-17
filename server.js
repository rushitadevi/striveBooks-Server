const express=require("express")
const server=express()
const bodyparser=require("body-parser")
var cors = require('cors')

server.use(bodyparser.json())
server.use(cors())
const books = require("./services/Index")

server.use("/books", books)

server.listen(3010,()=>{
    console.log("I have started on port 3010")
})
