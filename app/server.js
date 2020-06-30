const app = require("./src/app.js");

module.exports = app.listen(3000, () => {
  console.log("running on port 3000");
  console.log("--------------------------");
});