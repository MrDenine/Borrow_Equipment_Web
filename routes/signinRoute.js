const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config');
const encrypt_decrypt_tools = require('../utils/encrypt_decrypt_tools');
const { response } = require('../app');
const {accessCookieExist} = require('../middleware/validation_user');

router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());

router.use(cookieParser());
router.get('/',accessCookieExist, (req, res, next) => {
    res.render('signin', { data: 'signin' });
})

router.post('/PostSignin',function(req,res,next){
    // var username = 'admin116'; 
    // var password = '12345';
    var username = req.body.Username; 
    var password = req.body.Password;


    if(username && password){
        //call postLogin
        axios
        .post(config.servurl + '/Login/PostLogin',{
            username : username,
            password : password,
        })
        .then(function (response) {
            if(response.data.status == "Succeed"){
                //get userdata
                userdata = response.data.data[0];
                
                if(response.data.data[0].username.includes("admin")){
                    userdata.role = 'admin';
                }else if(response.data.data[0].username.includes("dpm")){
                    userdata.role = 'dpm';
                }else{
                    userdata.role = 'member';
                }
                userdata_enc = encrypt_decrypt_tools.encrypt(JSON.stringify(userdata));
                //setCookie
                res.cookie('UDT', userdata_enc, config.cookie_options);
                
                res.status(200).send(response.data);
                return;
            } else {
                res.status(200).send(response.data); //echo
                return;
            }
        })
        .catch(function (error) {
            res.status(400).send(error); 
            return;
        });
    } else {
        res.status(400).send('bad request'); //echo
        return;
    }
})

module.exports = router;