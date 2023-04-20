import express from 'express'
import morgan from 'morgan'
import {Server as SocketServer} from 'socket.io'
import http from 'http'
import cors from 'cors'
import {PORT} from './config.js'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server,{
    cors:{
        origin: '*',
    }
})


app.use(cors())
app.use(morgan('dev'))

io.on('connection', (socket)=>{
    console.log(`${socket.id} has connected to the app`)   
    socket.on('Mensaje', function (message)
    {
        socket.broadcast.emit('Mensaje',{
            body: message,
            from: socket.id
        })
    })
})

server.listen(PORT)
console.log('server started on port '+PORT)