var fs = require("fs")
var path = require('path');

/* Directory Scanning Test */

scan = function (dirPath) {
	fs.readdir(dirPath, function(err, files) {
		console.log("Debug: (Files) ", files)
		let tree = []
		
		for (let i = 0; i < files.length; i++) {
			fs.stat(files[i], function(err, stats) {
				if (stats.isDirectory()) {
					console.log("Debug: Is Directory")
					tree.push(scan(files[i]))
				} else {
					console.log("Debug: Is File")
					tree.push(files[i])
				}
			});
		}
		
		return tree;
	});
}

let test = scan("workspace")
console.log(test)
