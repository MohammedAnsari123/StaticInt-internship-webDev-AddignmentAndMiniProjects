const fs = require('fs');

// Synchronous Method
fs.writeFileSync("text.txt", "This is an assignment file.")

// Ayynchronous Method
fs.writeFile("text.txt", "This is an assignment file", (err) => {
    if (err) {
        console.error("Async write failed.", err)
    }
    else {
        console.log("Async write complete.", err)
    }
});



