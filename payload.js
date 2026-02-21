// payload.js
const fs = require("fs");
const path = require("path");

// If this runs, you'll be able to visit /snapshot/pwned
fs.writeFileSync(path.join(__dirname, "pwned.html"), "<h1>pwned</h1>");
