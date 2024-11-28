import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Mexico!!</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1> 33-12-44-40-06</h1>");
})

app.get("/about", (req, res) => {
    res.send("<p> I'm from Mexico, living my biggest dream!!<p>");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})