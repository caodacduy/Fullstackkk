const express=require('express')
const router=express.Router()
const {getHomepage,getduypage,postCreateUser,getCreatePage}=require('../controllers/homeController')
router.get('/', getHomepage)
router.get('/duybodoi', getduypage)
router.get('/create',getCreatePage)
router.post('/create-user',postCreateUser)

 module.exports=router

