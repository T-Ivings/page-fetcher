const request = require('request');
const fs = require('fs');
let bytes = 0;

const arg = function () {
return process.argv.slice(2, 4)
}

const webGet = function (website, directory) {
  request(website, (error, body) => {
    if (error) {console.log('error:', error)}; // Print the error if one occurred
    fs.writeFile(directory, body, 'utf-8', (err) => { //writes to directory, writes the body, in readable code, also can error
      if (err) throw err; //if its an error throw an error
      bytes = fs.statSync(directory); //how many bites is directory
      console.log(`Downloaded and saved ${bytes.size} bytes to ${directory}`) //print that info out for the boys and gals
    })
  })
};


webGet(arg()[0], arg()[1])