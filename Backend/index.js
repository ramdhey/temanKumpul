import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import {fileURLToPath} from "url"
import { register } from "./app/auth.js"
import authRoutes from "./app/authRoutes.js"
import userRoutes from "./app/User/UserRoutes.js"
import postRoutes from "./app/Posts/PostsRoutes.js"
import { verifyToken } from "./Middleware/auth.js"
import {createPost} from "./app/Posts/PostsController.js"
import User from "./app/User/UserModel.js"
import Post from "./app/Posts/PostsModel.js"
import {users,posts} from "./data/dummy.js"




// configuration
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use("/assets",express.static(path.join(__dirname,"public/assets")))
mongoose.set('strictQuery', false);


// filestorage
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/assets")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage})

// Router file Upload
app.post("/register",upload.single("picture"),register)
app.post("/posts",verifyToken,upload.single("picture"),createPost)


// Other Route
app.use("/auth",authRoutes)
app.use("/users",userRoutes)
app.use("/posts",postRoutes)



// setup mongoose
const PORT = process.env.PORT || 5005
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`PORT Server run on : ${PORT}`))

    // ADD DUMMY DATA
    // User.insertMany(users)
    // Post.insertMany(posts)


}).catch((error)=>console.log(`Not Conenected to PORT ${PORT},is Error on ${error}`))

