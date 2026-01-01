import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Dairy Server Running 🥛");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
