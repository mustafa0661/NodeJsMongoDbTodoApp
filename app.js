const express = require("express")
const app = express()
require("dotenv").config()
require("./src/config/databaseConnection.js")
const port = process.env.PORT
const todoRouter = require("./src/routers/todoRouter.js")

//api 
app.use(express.json())

app.use("/api", todoRouter)

console.log(process.env.PORT);

app.get("/", (req, res) => {
    res.send("Anasayfa")
})

app.listen(port, () => {
    console.log(`Server ${port} Portundan Başlatıldı ...`)
})