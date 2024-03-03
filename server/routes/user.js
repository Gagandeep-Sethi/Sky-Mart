const express=require('express')
const router=express.Router()
const {signIn,signUp}=require('../controllers/userController')

router.get('/signin',signIn)

router.post('/signup',signUp)

module.exports=router