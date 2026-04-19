import express from 'express'
const router = express.Router();

import { registerUser  } from '../controller/user.controller.js'


router.post('/singup', registerUser )


export default router;