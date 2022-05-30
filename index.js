const express = require("express");
const app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

io.on('connection', (socket) => {

    socket.on("disconect", () => {
        console.log("Usuario " + socket.id + " está offline.");
    });

    socket.on("msg", (data) => {
        io.emit("showmsg", data);
        console.log(data);
    });

});

app.set('view engine', 'ejs');

app.get('/', (req, res) => { 
    res.render("index");
});

http.listen(3000, (req, res) => {
    console.log("Hello World!");
});