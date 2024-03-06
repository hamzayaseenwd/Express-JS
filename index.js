const express = require("express");
const app = express();
const { todo } = require("./data");











app.use(express.json());

app.get("/task", (req, res) => {
  return res.json({
    message: "Hello world! using GET Method",
    data: todo
  });
  
});



app.get("/task/:id", (req, res) => {
  
  const id = req.params.id;
  const find_todo = todo.find((elem) => {
    return elem.id == id;
  });

  return res.json({ data: find_todo });
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