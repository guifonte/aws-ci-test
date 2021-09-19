import 'reflect-metadata'
import { createConnection, getRepository } from 'typeorm'
import express from 'express'
import { Category } from './entities/category'


// app.get("/db", async (req, res, next) => {
//     try {
//         const conn = await createConnection()
//         await conn.close()
//         res.send("db open and closed!")
//     } catch (error) {
//         console.error("DB ERROR!!!!")
//         console.error("RDS_HOSTNAME:",process.env.RDS_HOSTNAME,"RDS_PORT:",process.env.RDS_PORT,"RDS_USERNAME:",process.env.RDS_USERNAME,"RDS_PASSWORD:",process.env.RDS_PASSWORD,"RDS_DB_NAME:",process.env.RDS_DB_NAME)
//         console.error(error)
//         res.send("db not ok")
//     }
// })

createConnection().then(async connection => {

    const app = express()
    app.use(express.json())

    app.get("/", (req, res, next) => {
        res.send("Hello World")
    })

    app.get("/categories", async (req, res, next) => {
        const repo = getRepository(Category)
        res.json(await repo.find())
    })

    const port = process.env.PORT ?? 8080 
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))

}).catch(error => {
    console.error("DB ERROR!!!!")
    console.error("RDS_HOSTNAME:",process.env.RDS_HOSTNAME,"RDS_PORT:",process.env.RDS_PORT,"RDS_USERNAME:",process.env.RDS_USERNAME,"RDS_PASSWORD:",process.env.RDS_PASSWORD,"RDS_DB_NAME:",process.env.RDS_DB_NAME)
    console.error(error)
})