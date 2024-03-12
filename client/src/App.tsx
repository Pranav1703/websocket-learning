

function App() {
  
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

    </>
  )
}

export default App
