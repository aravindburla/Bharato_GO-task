import express from "express";
import { databaseLoader } from "./helpers/databaseLoader.js";
import router from "./routes/userRoutes.js";
const app = express()

databaseLoader()

app.use('/users', router)

app.listen(3001,()=>{
    console.log('server is running on 3002');
})


