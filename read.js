// Reading  "hello.txt"

const fs = require('fs');

fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('Content of hello.txt:');
  console.log(data);
});