const fs = require("fs");

function writeTo(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

writeTo("filePath", "data")
  .then((data) => {
    console.log("data written to file");
  })
  .catch((err) => {
    console.error(err);
  });

for (let i = 0; i < 10000000000; i++) {}
