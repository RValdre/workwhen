const express = require("express")
const mongoose = require("mongoose")
// const userRouter
// require("dotenv").config()

const app = express()
const PORT = 8080

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.06xoxj3.mongodb.net/?retryWrites=true&w=majority`
// mongoose
//   .connect(uri)
//   .then(() => console.log('Database connection established'))
//   .catch((e) => console.error(e))

// app.use("/user", userRouter)

app.get("*", (req, res) => {
    res.send("404")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})