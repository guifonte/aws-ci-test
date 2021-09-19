import express from 'express'

const app = express()

app.get("/", (req, res, next) => {
    res.send("Hello World")
})

app.listen(80, () => console.log(`Server running at http://localhost:80`))