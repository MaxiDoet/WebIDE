var fs = require("fs")
var path = require('path');
var dirTree = require("directory-tree");

/* Directory Scanning Test */
/*
scan = function (dirPath) {
	fs.readdir(dirPath, function(err, files) {
		console.log("Debug: (files) ", files)
		let tree = []
		
		files.forEach(function(file){
			console.log("Debug: (file) ", file)
			fs.stat(file, function(err, stats) {
				if (stats.isDirectory()) {
					console.log("Debug: Is Directory")
					tree.push(scan(file))
					return tree;
				} else {
					console.log("Debug: Is File")
					tree.push(file)
				}
			});
		});		
		return tree;
	});
}

let test = scan("workspace")
console.log(test)
*/

/* OLD 
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
 END */

var tree = dirTree("workspace");
console.log(tree['children'][1])
