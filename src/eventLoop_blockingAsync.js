const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const doingAThing = function(message) {
  console.log(`Doing something for ${message}`);
};

const blockingAThing = function() {
  const request = new XMLHttpRequest();
  request.onloadend = () => {
    console.log('Non Blocking complete!');
  };
  request.onloadstart = () => {
    console.log('Starting a blocking HTTP Request.');
  };
  request.open('GET', 'https://ajax.googleapis.com/ajax/libs/d3js/5.9.0/d3.min.js"', false);
  request.send();
};

// Blocking demo.
console.log('*** Starting blocking demo. ***');
doingAThing('start');
blockingAThing();
blockingAThing();
doingAThing('end');
console.log(`*** Done with blocking demo. ***`);

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Press any key to quit.', () => {
  console.log('quitting.');
  rl.close();
});
