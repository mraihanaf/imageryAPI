import express from "express"
import swagger from "./swagger"
import { serve, setup } from "swagger-ui-express"
import { config } from "dotenv"
import router from "./routes"
import cors from "cors"

config()
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: "*"
}))
app.use("/api-docs", serve, setup(swagger))

/**
* @openapi
*  /:
*   get:
*     description: welcome to the imageryapi!
*     responses:
*      200:
*       description: returns an imageryapi is online!
*/

app.get("/", (req, res) => {
    res.send("ImageryAPI is Online!");
})

app.use("/api/v1", router)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
