const fs = require('fs');
const fsPromises = require('fs').promises;
const https = require('https');

// Task 1: Write to file (sync + async)
const fileName = 'assignment.txt';
const fileContent = 'This is an assignment file.';

// Synchronous write
fs.writeFileSync(fileName, fileContent);

// Asynchronous write (overwrites again for demo)
fs.writeFile(fileName, fileContent, (err) => {
  if (err) throw err;
  console.log('Async write complete');
});

// Task 2: Read file (sync + async)
const contentSync = fs.readFileSync(fileName, 'utf-8');
console.log('Synchronous Read:', contentSync);

fs.readFile(fileName, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('Asynchronous Read:', data);
});

// Task 3: Append current date and time
const timestamp = `\n${new Date().toLocaleString()}`;
fs.appendFileSync(fileName, timestamp);
console.log('Date and time appended');

// Task 4: Copy and delete file
const copiedFile = 'copy_assignment.txt';

fs.copyFileSync(fileName, copiedFile);
console.log('File copied to', copiedFile);

fs.unlink(copiedFile, (err) => {
  if (err) throw err;
  console.log('Copied file deleted');
});

// Task 5: Callback function for calculation
function calculate(a, b, callback) {
  return callback(a, b);
}

// Example: addition callback
function add(x, y) {
  return x + y;
}
console.log('Calculate (Add):', calculate(5, 10, add));

// Task 6: String to uppercase using callback
function toUpperCase(str, callback) {
  return callback(str);
}

const result = toUpperCase("hello world", (s) => s.toUpperCase());
console.log('Uppercase:', result);

// Task 7: Promise to check even/odd
function checkEvenOdd(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} is even`);
    } else {
      reject(`${num} is odd`);
    }
  });
}

checkEvenOdd(4)
  .then(console.log)
  .catch(console.error);

// Task 8: Fetch first 5 posts using async/await
async function fetchPosts() {
  return new Promise((resolve, reject) => {
    https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
      let data = '';

      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const posts = JSON.parse(data);
          const titles = posts.slice(0, 5).map(post => post.title);
          resolve(titles);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

(async () => {
  try {
    const titles = await fetchPosts();
    console.log('First 5 Post Titles:');
    titles.forEach((title, index) => {
      console.log(`${index + 1}. ${title}`);
    });
  } catch (err) {
    console.error('Fetch Error:', err.message);
  }
})();
