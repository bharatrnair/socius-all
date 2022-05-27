const {Server} = require("socket.io");
const io = new Server({
    cors:{
        origin: "http://localhost:3000",
    },
});
let onlineUsers = [];

const addNewUser =(userName,socketId) =>{
    !onlineUsers.some((user)=>user.userName===userName)&&
    onlineUsers.push({userName, socketId});
};
const removeUser =(socketId)=>{
    onlineUsers =onlineUsers.filter((user)=>user.socketId !==socketId);
};
const getUser =(userName)=>{
    return onlineUsers.find((user)=>user.userName === userName);
};

 

io.on("connection", (socket) => {
    socket.on("newUser",(userName)=>{
        console.log(userName);
        addNewUser(userName,socket.id);
        socket.emit("getNotification","Bharath added you as friend")
    })

 socket.on("disconnect",()=>{
 
 });
});

io.listen(5000);