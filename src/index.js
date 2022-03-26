import express from "express";
import mongoose from 'mongoose'

const app = express();

const mongoUri = 'mongodb+srv://theexcel:olatunbosun2018@cluster0.e2qzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, () => {
    console.log('connected to mongodb')
})


app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
