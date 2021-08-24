const express = require("express");
const router = express.Router();
const fileUtils = require("../fs-utils");

router.post('/upload', async (req, res, next) => {
  const { files } = req;
  await fileUtils.writeFile(Object.values(files));
  next();
})
module.exports = router;

