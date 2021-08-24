const fs = require("fs");
const path = require("path");
const basePath = path.join(__dirname, "../source-map");

async function writeFile(files) {
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath)
  }
  files.forEach(file => {
    const { name, path: sourcePath } = file;
    const readStream = fs.createReadStream(sourcePath);
    const filePath = path.join(basePath, name);
    const writeStream = fs.createWriteStream(filePath);
    readStream.pipe(writeStream);
  })
}


module.exports = {
  writeFile
}