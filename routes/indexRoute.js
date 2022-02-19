const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('index',{title:'ข้อมูลครุภัณฑ์'});
})

router.get('/regis', (req, res, next) => {
    res.render('regisEquipment',{title:'ลงทะเบียนครุภัณฑ์'});
})

module.exports = router;
