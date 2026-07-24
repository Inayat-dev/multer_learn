import express from "express"
import multer from "multer"
import {upload} from "./multer/multer.js"
import ejs from "ejs"

const PORT = 9000
const app = express()

//middlewares
app.set("view engine","ejs")
app.use(express.static("./public"))

//upload route
app.post("/upload",upload.single("file"),(req,res)=>{
    res.send(req.file)
})

//index page render
app.get("/",(req,res)=>{
    res.render("index")
})


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})