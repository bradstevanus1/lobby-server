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

      // The disconnect event is called automatically (e.g. close tab) or manually by the client and will automatically
      // close the connection to the server. This callback is just extra code.
      socket.on("disconnect", () => {
        io.to(room).emit("chat message", `A user has left ${room}`);
      });
    });
  });

  return io;
}

module.exports = lobbyServer;
