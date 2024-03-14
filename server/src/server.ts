import { WebSocketServer }from "ws"

const wsServer = new WebSocketServer({ port: 3000 })

wsServer.on("connection",(ws)=>{
    console.log("new client connected")

    ws.send("connection established!")

    ws.on("message",(data)=>{
    
        const msg = data.toString()    
        console.log(msg);
        
        if(msg==="close"){
           
            ws.send("connection closed safely.")
            console.log("first:",ws.readyState.toString())
            if(ws.readyState === ws.OPEN){
                
                ws.close(1000,"connection closed safely.");
                console.log("second:",ws.readyState.toString())
            }
            
            console.log("third",ws.readyState.toString())

        }

    })
    
    setTimeout(()=>{
        
        ws.send("connection closed safely.")
        console.log("before:",ws.readyState.toString())
        if(ws.readyState === ws.OPEN){
            
            ws.close(1000,"connection closed safely.");
            
        }
        
        console.log("after",ws.readyState.toString())
    },5000)

    let sec:number = 0
    const sendTimeInterval = setInterval(() => {
        
        if (ws.readyState === ws.OPEN) {
            
            
            ws.send(`seconds ${sec}`);
      
            sec++
            
        } else {
            clearInterval(sendTimeInterval); // Stoping data transfer if connection is closed
        }
    }, 1000);
    
   
    ws.on("close",(code,reason)=>{
        console.log(`connection closed. socket status ${ws.readyState}. CODE ${code} --- "${reason}"`)
    })
    
})
