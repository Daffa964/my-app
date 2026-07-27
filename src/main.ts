import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Docker Multi Stage Build");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

console.log("DATABASE_URL =", process.env.DATABASE_URL);
