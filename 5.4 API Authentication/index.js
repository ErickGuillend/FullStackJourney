import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "Erickson";
const yourPassword = "mountains4";
const yourAPIKey = "f8687ddf-f8a3-4b24-8b4d-53e65b608cf9";
const yourBearerToken = "00c882b68-20dc-4f27-8c58-cb92591667b6";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
    try{ 
      const result = await axios.get(API_URL + "/random");
      res.render("index.ejs", {content: JSON.stringify(result.data)});
    }catch (error){
      res.status(404).send(error.message);
    }
});

app.get("/basicAuth", async (req, res) => {
 try {
  const response = await axios.get(API_URL + "all?page=2" , {
    auth: {
      username: yourUsername,
      password: yourPassword
    },
   });
   res.render("index.ejs", {content: JSON.stringify(response.data)});
 } catch (error) {
    res.status(404).send(error.message);
 }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(response.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

const config = {
  header: {Authorization: `Bearer ${yourBearerToken}`},
};

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", {content: JSON.stringify(response.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
