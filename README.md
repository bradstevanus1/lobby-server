# lobby-server

A small wrapper around websockets that handles realtime connections to online lobbies. The [lobby-client](https://www.npmjs.com/package/lobby-client "Lobby Client NPM Package") is used to connect clients to lobbies on this server.

## Installation

```bash
npm install lobby-server
```

## Usage

```javascript
// Create a Node.js HTTP server (with Express in this case)
const app = require("express")();
const http = require("http").createServer(app);

// Start the socket.io server that handles websocket requests from the client
require("lobby-server")(http);

// Listen on a port. This port must be specified when connecting with the client.
http.listen(3000);
```

## Contributing

Pull requests are welcome. An issue can be opened for larger changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
