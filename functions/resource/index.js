
function resourceErrorFunction({ url, message }) {
  if (!url) return;
  logger.error(message, url);
}

module.exports = {
  resourceErrorFunction
}