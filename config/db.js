const mongoose = require("mongoose");

const uri = "mongodb+srv://gauravanand6321:brSMgfUeZFVmmRo0@gofoodmern.00npwb5.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=GoFoodMern";


let dbURL = uri.replace("<username>", process.env.DB_USERNAME);
    dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
    dbURL = dbURL.replace("<dbName>", process.env.DB_NAME);


mongoose
    .connect(dbURL)
    .then(() =>{
    console.log("--------DB Connected------");
})
.catch((err) =>{
    console.log("DB Connect Failed");
    console.log(err);
});