const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.port || 8000;

app.use(express.static(path.join(__dirname,"/client","/build")));

app.listen(PORT, () => {
  console.log("Server at "+ PORT);
  console.log("Dir at "+ path.join(__dirname,"/client","/build"));
});
