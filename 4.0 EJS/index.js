import express from "express";
const app = express();

const port = 3005;

app.get("/", (req, res) =>{
    const today = new Date();
    const day = today;

    let type = "a weekday";
    let advice = "it's time to work hard";

    if(day === 0 || day === 6) {
        type = "the weekend";
        advice = "it's time to have some fun";
    }

    res.render("index.ejs", 
        {
         dayType: type, 
         advice: advice
        });
});

app.listen(port, () => {
    console.log(`Server running on ${port}.`);
})