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
            console.log("before:",ws.readyState.toString())
            if(ws.readyState === ws.OPEN){
    
                ws.close(1000,"closed safely.");

                
            }
            
            console.log("after",ws.readyState.toString())

        }
        
    })



    let sec:number = 0
    const sendTimeInterval = setInterval(() => {
            
        if (ws.readyState === ws.OPEN ) {
                
                
            ws.send(`seconds ${sec} socket state ${ws.readyState}`);
            sec++;
            if(sec===5) ws.close(1000,"connection closed")
                
        } else {
            
            console.log("clear interval triggered")
            clearInterval(sendTimeInterval); // Stoping data transfer if connection is closed
        }
    }, 1000);

    
   
    ws.on("close",(code,reason)=>{
        console.log(`connection closed. socket status ${ws.readyState}. CODE ${code} --- "${reason}"`)
    })

    ws.onclose = ()=>{
        console.log("closed------------------------------")

    }

    ws.onopen = ()=>{
        console.log("opened-------------------------------")
    }
    
})



