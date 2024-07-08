import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello world!")
  console.log(req.path)
})

app.listen(3000, () => {
  console.log("Listening to port")
})
