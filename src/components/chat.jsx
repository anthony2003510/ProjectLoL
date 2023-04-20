import React,{useState,useEffect} from 'react'
import io from 'socket.io-client'
import {PORT} from '../../server/config.js'
const socket = io(`http://localhost:${PORT}`)
function Chat() {
  const [message, setmessage] = useState("")
  const [messages, setmessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('Mensaje', message)
    const newMessage = {
      body: message,
      from: "Me"
    }
    setmessages([newMessage,...messages]) 
    setmessage('')
  }

  useEffect(()=>{
    const recieveMessage = message =>{
      setmessages([
      {
        body: message.body,
        from: message.from
      }, 
      ...messages])
    }
    socket.on('Mensaje', recieveMessage)

    return () =>{
      socket.off('Mensaje', recieveMessage)
    }
  },[messages])

  return (
    <div
        className="p-7 font-semibold overflow-scroll scrollbar-none h-screen w-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_38.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // overflowY: "scroll",
        }}
      >
          
        <form onSubmit={handleSubmit} className='rounded-lg' style={{padding:"1em 1em 1em 1em", backgroundColor: "rgb(9 20 40 / 0.9)", width: "35vw", height: "70vh"}}>
          <div style={{fontSize: "1.9vw"}} className="mr-auto ml-auto mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center">
              Chat de Invocadores
              </div>
            <hr  style={{border: "solid 1px white"}} className='mb-7'/>
            <div style={{display: "flex", justifyContent:"center"}}>
              <input style={{width: "30vw"}} type ="text" onChange={(e) => setmessage(e.target.value)} value={message} className=' bg-[#0A1428] border-2 mb-2 border-[#C89B3C] p2 text-white'/>
            </div>
            <ul className='h-80 overflow-scroll scrollbar-none px-10' >
              {messages?.map((msg,i) => (
              <li key={i} className={`my-2 p-2 table text-sm rounded-md ${msg.from == "Me" ? "bg-[#785A28] ml-auto":"bg-[#3C3C41]"}`}>
                <p className='text-white '>{msg.from}: {msg.body}</p>
              </li>
              ))}
            </ul>
            
        </form>
   
    </div>
  )
}

export default Chat