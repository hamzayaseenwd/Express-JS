const express = require("express");
const app = express();

app.use(express.json());

app.get("/task", (req, res) => {
  return res.json({
    message: "Hello world! using GET Method",
  });
});

app.post("/task", (req, res) => {
  console.log(req.body);

  return res.json({
    message: "Hello world! using POST Method",
    consoleLog: req.body,
  });
});

app.listen(3001, () => {
  console.log("Express server started");
});






// http://localhost:3001/task
// nodemon
// npm init -y