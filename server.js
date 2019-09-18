const express=require("express")
const server=express()
const bodyparser=require("body-parser")
var cors = require('cors')
server.use(cors())

const books = require("./services/Index")

server.set("port", process.env.PORT || 3450)
//console.log(process.env.PORT)
server.use(bodyparser.json())
var whitelist = ['https://strivebookapiserver.herokuapp.com', 'http://localhost:3450']
var corsOptions = {
  origin: function (origin, callback) {
     // console.log(origin)
    if (whitelist.indexOf(origin) !== -1) {

      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}



server.use("/books",cors(corsOptions), books)

server.listen(server.get('port'),()=>{
    console.log("I have started on port"+ server.get("port"))
})
