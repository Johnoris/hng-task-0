import express, { Request, Response } from "express";
import cors from "cors";

const app = express()
app.use(cors())
const PORT = 5000

app.get("/", (req: Request, res: Response) => {
    const personalInfo = {
        email: "johnorisanwo@gmail.com",
        current_datetime: new Date(),
        github_url: "https://github.com/Johnoris/hng-task-0"
    }

    res.status(200).json(personalInfo)
})
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})