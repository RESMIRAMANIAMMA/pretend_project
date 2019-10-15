
const fetch = require('node-fetch');

console.log("Hello world");
fetch('https://google.com')
.then(
	 (result) => console.log(result)
	 );
