const express = require("express");
const router = express.Router();
const { ERROR_TYPE } = require("../utils/enmus.js");
const errorFunction = require("../functions/index.js");

const errorFunctionMap = {
  [ERROR_TYPE.resourceError]: errorFunction.resource,
  [ERROR_TYPE.scriptError]: errorFunction.script,
  [ERROR_TYPE.vueError]: errorFunction.vue
}


router.get("/", async function (req, res, next) {
  const { error } = req.query;
  const errorJsonString = Buffer.from(error, "base64").toString();
  try {
    const { url, stack, type, message } = JSON.parse(errorJsonString);
    errorFunctionMap[type]({ url, stack, message })
  } catch (error) {
    throw error;
  }
  next();
});

module.exports = router;
