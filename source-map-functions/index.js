const sourceMap = require("source-map");
const path = require("path");
const fs = require("fs");

async function toSource({ columnNumber, lineNumber, fileName, errorMessage }) {
  const mapFileUrl = fileName.slice(fileName.indexOf("js")) + ".map";
  const mapContent = fs.readFileSync(
    path.resolve(__dirname, "../source-map/" + mapFileUrl),
    "utf-8"
  );
  const consumer = await new sourceMap.SourceMapConsumer(
    JSON.parse(mapContent)
  );
  const sm = consumer.originalPositionFor({
    line: +lineNumber,
    column: +columnNumber
  });
  return sm;
}


module.exports = {
  toSource
}