import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/Routes/songRoute.js';
import connectDB from './src/Config/mongodb.js';
import connectCloudinary from './src/Config/cloudinary.js';
import albumRouter from './src/Routes/albumRoute.js';

//App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//Middleware
app.use (express.json());
app.use (cors());

//Initialising Routes
app.use ( "/api/song",songRouter)
app.use ( "/api/album", albumRouter)
app.get ('/', (req,res)=> res.send ("API working"))


app.listen (port, ()=>console.log (`Server started on ${port}`))