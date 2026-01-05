import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Backend is running 🥛");
});


app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Milk", price: 50 },
    { id: 2, name: "Curd", price: 40 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
