const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config');
const encrypt_decrypt_tools = require('../utils/encrypt_decrypt_tools');
const { response } = require('../app');

router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());

router.get('/',(req,res,next)=>{
    res.render('index',{title:'ข้อมูลครุภัณฑ์'});
})

// router.post('/search',(req,res,next)=>{
//     axios
//       .post(config.servurl +'',{

//       })    
//       .then((response)=>{
//         res.status(200).send(response); 
//         return;
//       })
//       .catch(function (error) {
//         res.status(400).send(error); 
//         return;
//     });
// })
module.exports = router;
