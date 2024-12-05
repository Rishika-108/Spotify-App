import  {addSong, listSong, removeSong} from '../Controllers/songController.js';
import express from 'express';
import upload from '../Middleware/Multer.js';

const songRouter = express.Router();

songRouter.post('/add',upload.fields([{name:'image', maxCount : 1,}, {name :'audio', maxCount : 1}]), addSong);
songRouter.get ('/list',listSong)
songRouter.post('/remove', removeSong);

export default songRouter;