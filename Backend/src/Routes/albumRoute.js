import express from "express";
import upload from "../Middleware/Multer.js";
import  {addAlbum, listAlbum, removeAlbum} from '../Controllers/albumController.js'

const albumRouter = express.Router();

albumRouter.post( '/add', upload.single('image'),addAlbum);
albumRouter.get( '/list',listAlbum);
albumRouter.post( '/remove',removeAlbum);

export default albumRouter;