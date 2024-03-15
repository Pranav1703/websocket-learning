import { useState } from "react";
import "./styles/app.css"

function App() {
  
  const [text,setText] = useState<string>("")
  const [status,setStatus] = useState<string>("")

  

  // setInterval(()=>{
  //   if(ws) ws.close()
  // },10000)
  
  const ws = new WebSocket("ws://localhost:3000");

  
  
  ws.addEventListener("open",()=>{
    console.log("connected to server")
    setStatus("connected to server")
    

  })

  ws.addEventListener("message",(data:MessageEvent<string>)=>{
    console.log("data recieved from server",data,"\n")
    setText(data.data)
    
  })
  ws.addEventListener("close",()=>{
    console.log("connection closed. client side socket state = ",ws.readyState)
    setStatus("connection closed")
  })
  const disconnetHandler = ()=>{
    // if(ws.readyState === WebSocket.OPEN){  // check not working
    //   ws.close(1000,"connection closed manually and safely")
    //   console.log("disconnected",ws)
    // } 
      
      ws.close(1000,"connection closed manually and safely")
      console.log("disconnected",ws)


  }

  const change = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    
    ws.send(e.target.value);
    console.log(text)
  }

  return (
    <>
      <div className="main">
      
          <button onClick={()=>disconnetHandler()}>disconnect</button>
          <p>{status}</p>
          <textarea cols={105} rows={32} value={text} onChange={(e)=>change(e)}>
          </textarea>
      </div>
    </>
  )
}

export default App
