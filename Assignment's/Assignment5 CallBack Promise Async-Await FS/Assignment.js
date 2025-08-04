const fs = require('fs');

// Synchronous Method
fs.writeFileSync('assignment.txt', 'This is an assignment file.');
// Asynchronous Method
fs.writeFile('assignment.txt', 'This is an assignment file.', (err) => {
    if (err) console.error('Async write failed:', err);
    else console.log('Async write complete.');
});



// Synchronous
const content = fs.readFileSync('assignment.txt', 'utf-8');
console.log('Sync Read:', content);
// Asynchronous
fs.readFile('assignment.txt', 'utf-8', (err, data) => {
    if (err) console.error('Async read failed:', err);
    else console.log('Async Read:', data);
});



const dateTime = new Date().toLocaleString();
fs.appendFileSync('assignment.txt', `\nAppended on: ${dateTime}`);



fs.copyFile('assignment.txt', 'copy_assignment.txt', (err) => {
    if (err) throw err;
    console.log('File copied.');
    fs.unlink('copy_assignment.txt', (err) => {
        if (err) throw err;
        console.log('Copied file deleted.');
    });
});




function calculate(a, b, callback) {
    return callback(a, b);
}
// Test addition
const result = calculate(5, 3, (x, y) => x + y);
console.log('Addition Result:', result);






function processString(str, callback) {
    return callback(str);
}
// Test case
const uppercased = processString('hello world', (text) => text.toUpperCase());
console.log('Uppercased:', uppercased);






function checkEvenOdd(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve('Number is even');
        } else {
            reject('Number is odd');
        }
    });
}
// Test
checkEvenOdd(10)
    .then(msg => console.log(msg))
    .catch(err => console.error(err));








// Install node-fetch if needed: npm install node-fetch
import fetch from 'node-fetch';
async function fetchPosts() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        console.log('First 5 Post Titles:');
        posts.slice(0, 5).forEach(post => {
            console.log(`- ${post.title}`);
        });
    } catch (err) {
        console.error('Error fetching posts:', err);
    }
}
fetchPosts();




