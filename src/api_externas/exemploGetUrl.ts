var Observable = require('rxjs/Observable');
var http = require('http');
var url = require('url');


var adr = 'http://localhost:3000/pessoas';
// var adr = 'https://www.reddit.com/r/popular.json';

// var q = url.parse(adr, true);
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.href; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata); //returns 'february'

let req = http.get(adr, function(res) {
	let data = '',
		json_data;
	res.on('data', function(stream) {
		data += stream;
	});
	res.on('end', function() {
		json_data = JSON.parse(data);
	});
});

req.on('error', function(e) {
    console.log(e.message);
});

const subs = req.subscribe();
console.log(subs);