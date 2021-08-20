
const { toSource } = require("../../source-map-functions/index.js")
function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

async function vueErrorFunction({ stack, message }) {
  if (!stack) return;
  const stacks = [].concat(stack)
  const errorStack = [];
  for await(let stack of stacks) {
    const res = await toSource(stack);
    errorStack.push(res);
  }
  logger.error(message, errorStack);
}

module.exports = {
  vueErrorFunction
}