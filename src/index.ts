import express from 'express'

const app = express()

app.get("/", (req, res, next) => {
    res.send("Hello World")
})

app.listen(3000, () => console.log(`Server running at http://localhost:3000`))