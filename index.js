const express = require("express");
const app = express();
// console.dir(app);
// app.use((req,res) => {
//   console.log("We got a new Request")
//   //console.dir(res)
//   res.send("Hello, We got your request!!")
// })
app.get("/r/:subreddit", (req,res) => {
  const {subreddit} = req.params;
  res.send(`Browsing ${subreddit} subreddit.`)
})
app.get("/", (req,res) => {
  res.send("Welcome to the home page")
})
app.get("/cats", (req,res) => {
  res.send("Meow!!");
})
app.get("/dogs", (req,res) => {
  res.send("Wooof..")
})
app.post("/boris", (res, req) => {
  res.send("This is boris trying to use a post request")
})
app.get('*', (req,res) => {
  res.send("Oooopppps.... I dont know that path")
})

app.listen(3000, () => {
  console.log("Listenning on port 3000!")
})