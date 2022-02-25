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

router.post('/search/:id',(req,res,next)=>{
    var post_index = req.params.id;
    axios.get(config.servurl+'/GetData/DataEquipAll/'+post_index
      )
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });  
})
module.exports = router;
