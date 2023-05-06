import { Router } from "express";
import department from '../models/department.js'
import subject from '../models/subject.js'
import { index } from '../controllers/department.js';

const router = new Router();

router.get('/', index);



export default router;