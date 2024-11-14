import { io, Socket } from 'socket.io-client'

let socketOn: boolean = false
let socket: Socket | null = null

export const StartSocket = () => {



    if (!socketOn) {
        socket = io('http://localhost:5001')
        socketOn = true
        socket?.on("hello", () => {
            console.log("hello");

        })

        socket?.on("StartAttack", (data) => {
            
            
        })

    }

    function StartAttack(missile: string, username: string) {
        socket!.emit("StartAttack", { missile, username })
        console.log(missile, username);

    }
    return { StartAttack }

}