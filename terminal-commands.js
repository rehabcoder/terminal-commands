console.log('starting terminal commands');



const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });
};

module.exports.touch = (err) => {
  fs.writeFile('message.txt',  'File created', (err) => {
  if (err) throw err;

  console.log('success')
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./terminal-commands', (err, files) => {
    if (err) throw err;
  console.log('directory created');
  })
};
