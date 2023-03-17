const express =require("express")
const app = express()
const http=require("http");
const {Server} = require("socket.io")

const cors=require("cors")

app.use(cors());

const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]

    }
})

server.listen(3005,()=>{
    console.log("server is running")
})
