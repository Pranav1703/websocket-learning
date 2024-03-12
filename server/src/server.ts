import { WebSocketServer }from "ws"

const wsServer = new WebSocketServer({ port: 3000 })

wsServer.on("connection",(ws)=>{
    console.log("new client connected")
    ws.send("connection established!")
    ws.on("message",(data)=>{
        console.log(data);
    })
    setTimeout(()=>{
        ws.close(1000,"connection closed safely.");
    },15000)
    setInterval(()=>{
        let d = new Date
        ws.send(`time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
    },1000)
    
})