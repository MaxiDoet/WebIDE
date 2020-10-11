var express = require("express");
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var path = require('path');
var fs = require('fs');

app.use("/", express.static("app"));

// Setup Express Listener
http.listen(8080, "0.0.0.0", function() {
  console.log("listening on: 0.0.0.0:8080");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("document-update", function(msg) {
	console.log(msg);
  });
  socket.on("workspace-scan", function(msg) {
	console.log("Scanning Workspace");
	if (!msg || !msg.path) {
		socket.emit("workspace-scan-result", {path: ""});
		console.log("Invalid Scan Request!");
	}
	
	fs.readdir(msg.path, function (err, files) {
		//handling error
		if (err) {
			socket.emit("workspace-scan-result", {path: ""});
			return console.log('Unable to scan directory: ' + err);
		} 
		
		result = {}
		files.forEach(function (file) {
			console.log(file); 
		});
		socket.emit("workspace-scan-result", {result: files});
	});
  });
});
