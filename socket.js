import { Server } from "socket.io";

const setUpSocket = (server) => {
    const io = new Server(server , {
        cors : {
            origin : "*",
            methods : ["GET" , "POST"],
        }
    });

    io.on("connect" , (socket) => {
        // console.log("Client Connected" , socket.id);

        socket.on("message" , ({sender_email , receiver_email , message}) => {
            // console.log(message);
            socket.emit("send-message" , {sender_email , receiver_email , message})
        })

        socket.on("disconnected" , () => {
            console.log("Client Disconnect" , socket.id)
        })
    })

    return io;
}

export default setUpSocket;