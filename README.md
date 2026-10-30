# Basic Node.js & Express Server

A clean, minimal Node.js HTTP server built with Express and ES Modules (`import/export`). All socket-specific implementation code has been removed so you can build your own socket logic from scratch for learning!

---

## 📁 Project Structure

```
Socket/
├── public/
│   └── index.html       # Client HTML page
├── .env                 # Environment variables
├── .env.example         # Example environment template
├── .gitignore           # Git ignore list
├── package.json         # Project metadata and dependencies
├── README.md            # Documentation
└── server.js            # Express & HTTP server entry point
```

---

## 🚀 Running the Server

### 1. Start Server
```bash
npm start
```

### 2. Run in Development Mode (Auto-reloads on file changes)
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💡 Ready for Learning Sockets

In [server.js](file:///Users/mayankkumar/Local%20Files/Socket/server.js), we used `http.createServer(app)`. This pattern creates a standard Node HTTP server wrapping Express, which is the exact foundation needed to attach WebSocket libraries (such as `socket.io` or `ws`).

Whenever you are ready to learn and write socket code:
1. In `server.js`, you can import your socket library and attach it to the `server` instance.
2. In `public/index.html`, you can connect to your server using the socket client.
