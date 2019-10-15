
const fetch = require('node-fetch');

console.log("Hello world");
console.log("Welcome");
fetch('https://google.com')
.then(
	 (result) => console.log(result)
	 );
