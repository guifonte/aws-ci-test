import 'reflect-metadata'
import { createConnection } from 'typeorm'
import express from 'express'

console.log(process.env.RDS_PASSWORD)

createConnection().then(async connection => {
    const app = express()
    app.use(express.json())

    app.get("/", (req, res, next) => {
        res.send("Hello World")
    })
    const port = process.env.PORT ?? 8080  
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

}).catch(error => console.log(error))