const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  const fileName = `index${PORT}.html`;
  res.sendFile(path.join(__dirname, "src", fileName));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
