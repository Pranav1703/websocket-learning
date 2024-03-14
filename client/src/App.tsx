import { useState } from "react";
import "./styles/app.css"

function App() {
  
  const [text,setText] = useState<string>()


  const soc = new WebSocket("ws://localhost:3000");

  soc.addEventListener("open",()=>{
    console.log("connected to server")
    soc.send("hellodfkhbgldhbghljkrdbgldkgbsdal")
  })

  soc.addEventListener("message",(data)=>{
    console.log(data)
    
  })
  
 

  return (
    <>
      <div className="main">
          <textarea cols={105} rows={32} value={text} onChange={(e)=>{setText(e.target.value);console.log(text) } }></textarea>
      </div>
    </>
  )
}

export default App
