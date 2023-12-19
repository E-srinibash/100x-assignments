const fs = require('fs');

// Read the file
function fileUpdate(file){
fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;

  // Remove extra spaces
  const cleanedData = data.replace(/\s+/g, ' ');

  // Write the cleaned data back to the file
  fs.writeFile(file, cleanedData, (err) => {
    if (err) throw err;
    console.log('File has been cleaned and updated');
  });
});}

fileUpdate("path");