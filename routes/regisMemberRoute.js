const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config');
const encrypt_decrypt_tools = require('../utils/encrypt_decrypt_tools');
const {validateCookieExist} = require('../middleware/validation_user');
const {validateAdminRoute} = require('../middleware/validation_user');
const {validateDpmRoute} = require('../middleware/validation_user');
const {validateMemberRoute} = require('../middleware/validation_user');
const {getUserRole} = require('../utils/initial_data_tools');
const {getUserData} = require('../utils/initial_data_tools');

router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());
router.use(cookieParser());

router.get('/',validateCookieExist, (req, res, next) => {
    res.render('regisMember',{title:'ลงทะเบียนบุคลากร', udt : getUserData(req) , role : getUserRole(req) });
})

router.post('/PostRegisterMember',(req,res,next)=>{
    //userdata
    var post_rfid = req.body.rfid;
    var post_username = req.body.username;
    var post_password = req.body.password;
    var post_firstname = req.body.firstname;
    var post_lastname = req.body.lastname;
    var post_gender = req.body.gender;
    var post_datetime = req.body.datetime;
    var post_create_by = req.body.create_by;

    if(post_rfid && post_username && post_password && post_firstname && post_lastname && post_gender&&  post_datetime && post_create_by){ 
        axios
        .post(config.servurl + '/Register/PostRegis',{
            type_user : 3,
            rfid : post_rfid,
            username : post_username,
            enc_password : post_password,
            firstname : post_firstname,
            lastname : post_lastname,
            gender : post_gender,
            image_file : post_image_file,
            datetime : post_datetime,
            create_by : post_create_by,
        })
        .then(function(response){
            res.status(200).send(response.data); 
            return;
        })
        .catch(function (error) {
            res.send(error); 
            return;
        });
    }else{
        res.status(400).send('This request is not complete.'); //echo
        return;
    }
})

router.post('/PostUploadImageProfile',(req,res,next)=>{
    var post_rfid = req.body.rfid;
    var post_file = req.body.file;
    if(search){
      axios.post(config.servurl+'/UploadFiles/uploadImageProfile',{
        rfid : post_rfid,
        file : post_file
      })
      .then(function (response) {
        res.status(200).send(response.data);
        return;
      })
      .catch(function (error) {
        res.send(error); 
        return;
      })
    }else{
      res.status(400).send('This request is not complete.'); //echo
      return;
    }
})

router.post('/PostDeleteMember',(req,res,next)=>{
    var post_id = req.body.id;
    var post_datetime = req.body.datetime;
    if(search){
      axios.post(config.servurl+'/DeleteData/',{
        type_user : 3,
        id : post_id,
        datetime : post_datetime
      })
      .then(function (response) {
        res.status(200).send(response.data);
        return;
      })
      .catch(function (error) {
        res.send(error); 
        return;
      })
    }else{
      res.status(400).send('This request is not complete.'); //echo
      return;
    }
})
router.post('/PostEditMember',(req,res,next)=>{
    var post_id = req.body.id;
    var post_rfid = req.body.rfid;
    var post_username = req.body.username;
    var post_password = req.body.password;
    var post_firstname = req.body.firstname;
    var post_lastname = req.body.lastname;
    var post_gender = req.body.gender;
    var post_image_file = req.body.image_file;
    var post_datetime = req.body.datetime;
    var post_update_by = req.body.update_by;

    if(post_id){
        axios
        .post(config.servurl + '/EditData/UpdateData',{
            type_user : 3,
            id : post_id,
            rfid : post_rfid,
            username : post_username,
            enc_password : post_password,
            firstname : post_firstname,
            lastname : post_lastname,
            gender : post_gender,
            image_file : post_image_file,
            datetime : post_datetime,
            update_by : post_update_by,
        })
        .then(function(response){
            res.status(200).send(response.data); 
            return;
        })
        .catch(function (error) {
            res.send(error); 
            return;
        });
    }else{
        res.status(400).send('This request is not complete.'); //echo
        return;
    }
})

router.post('/PostDeleteMember',(req,res,next)=>{
    var post_id = req.body.id;
    var post_datetime = req.body.datetime;
    if(search){
      axios.post(config.servurl+'/DeleteData/',{
        type_user : 3,
        id : post_id,
        datetime : post_datetime
      })
      .then(function (response) {
        res.status(200).send(response.data);
        return;
      })
      .catch(function (error) {
        res.send(error); 
        return;
      })
    }else{
      res.status(400).send('This request is not complete.'); //echo
      return;
    }
})

router.post('/search',(req,res,next)=>{
    var search = req.body.search;
    if(search){
      axios.post(config.servurl+'/GetData/DataEquip',{
        search_value : search
      })
      .then(function (response) {
        res.status(200).send(response.data);
        return;
      })
      .catch(function (error) {
        res.send(error); 
        return;
      })
    }else{
      res.status(400).send('This request is not complete.'); //echo
      return;
    }
})
module.exports = router;