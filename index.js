function lobbyServer(http) {
  const io = require("socket.io")(http);

  // Handle incoming requests from clients
  io.on("connection", (socket) => {
    // Once a client has connected, we wait until we get a ping from them saying what room they want to join
    socket.on("room", (room) => {
      socket.join(room); // Put the socket in a room

      // When the socket emits a 'send' event, send json to all other sockets in the room
      socket.on("send", (json) => {
        socket.to(room).emit("receive", json);
      });
    });
  });

  return io;
}

module.exports = lobbyServer;
