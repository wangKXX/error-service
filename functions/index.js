
const { vueErrorFunction } = require("./vue/index.js");
const { resourceErrorFunction } = require("./resource/index.js");
const { scriptErrorFunction } = require("./script/index.js");


module.exports = {
  vue: vueErrorFunction,
  resource: resourceErrorFunction,
  script: scriptErrorFunction
}