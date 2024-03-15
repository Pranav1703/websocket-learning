import { WebSocketServer ,WebSocket }from "ws"

const wsServer = new WebSocketServer({ port: 3000 })

wsServer.on("connection",(ws)=>{
    console.log("new client connected")

    

    ws.on("message",(data)=>{
    
        const msg = data.toString()    
        console.log(msg);
        
        wsServer.clients.forEach((client)=>{
            if(client.readyState === WebSocket.OPEN){
                client.send(msg)
            }
        })
        
    })



    // let sec:number = 0
    // const sendTimeInterval = setInterval(() => {
            
    //     if (ws.readyState === WebSocket.OPEN ) {
                
                
    //         // ws.send(`server uptime: ${sec}. socket state ->${ws.readyState}`);
    //         wsServer.clients.forEach((client)=>{
    //             if(client.readyState === WebSocket.OPEN){
    //                 client.send(`server uptime: ${sec}. socket state ->${ws.readyState}`);
    //             }
    //         })
    //         sec++;
                
    //     } else {
            
    //         console.log("clear interval triggered")
    //         clearInterval(sendTimeInterval); // Stoping data transfer if connection is closed
    //     }
    // }, 1000);


   
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



