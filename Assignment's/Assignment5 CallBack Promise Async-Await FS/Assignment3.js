const fs = require('fs');

const dateTime = new Date().toLocaleString();
fs.appendFileSync("text.txt",`\n Appended on: ${dateTime}`);


