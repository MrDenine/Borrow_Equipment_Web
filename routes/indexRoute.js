const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('index');
})

router.get('/home',(req,res,next)=>{
    res.render('home',{data:'home'});
})

module.exports = router;
