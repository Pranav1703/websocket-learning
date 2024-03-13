import { useState ,useEffect} from "react";


function App() {
  
  const [data,setData] = useState<string>()

  const soc = new WebSocket("ws://localhost:3000");

  soc.addEventListener("open",()=>{
    console.log("connected to server")
    soc.send("hellodfkhbgldhbghljkrdbgldkgbsdal")
  })

  soc.addEventListener("message",(data)=>{
    console.log(data)
    
  })
  
  
  useEffect(() => {
    

    
  }, [])
  

  return (
    <>
      {data}
    </>
  )
}

export default App
