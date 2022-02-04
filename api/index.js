const express = require('express')
const app = express()
const PORT = process.env.port || 5000
const dotenv = require("dotenv")
const cors = require('cors')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const multer = require('multer')
const path = require('path')

dotenv.config()
app.use(express.json())
app.use(cors())
app.use("/images", express.static(path.join(__dirname + "/images")))

//Database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true
    // useCreateIndex: true
}).then(console.log("Database connection successful!")).catch((err)=> console.log(err))

//Multer config
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "images")
    }, filename:(req,file,cb)=> {
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})
app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("File uploaded")
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Backend is runnig on port ${PORT}!`))