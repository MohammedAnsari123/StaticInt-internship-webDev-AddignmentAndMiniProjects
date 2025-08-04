const fs = require('fs');

// Synchronous
const content = fs.readFileSync("text.txt", "utf-8")
console.log("Sync Read:", content)

// Asynchronous
fs.readFile("text.txt", "This is an ABC assigment file.", (err, data) => {
    if (err) {
        console.error("Async read failed:", err)
    }
    else {
        console.log("Async Read:", data)
    }
});

