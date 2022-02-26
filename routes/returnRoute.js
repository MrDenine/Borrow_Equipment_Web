const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('../config');
const encrypt_decrypt_tools = require('../utils/encrypt_decrypt_tools');
const { response } = require('../app');
const {validateCookieExist} = require('../middleware/validation_user');
const {validateAdminRoute} = require('../middleware/validation_user');
const {validateDpmRoute} = require('../middleware/validation_user');
const {validateMemberRoute} = require('../middleware/validation_user');


router.use(bodyParser.urlencoded({extended : false}));
router.use(bodyParser.json());

router.use(cookieParser());


router.get('/', (req, res, next) => {
    res.render('return',{title:'ทำรายการคืน'});
})

router.post('/search',(req,res,next)=>{
    var typeSearch = req.body.typeSearch;
    var firstDate = req.body.firstDate;
    var untilDate = req.body.untilDate;
    if(!typeSearch || typeSearch === '' || !firstDate || firstDate === '' || !untilDate || untilDate === ''){
      axios.get(config.servurl+'/GetData/DataReport/'
      )
      .then(function (response) {
        res.send(response.data.data);
        return;
      })
      .catch(function (error) {
        console.log(error);
      })
    } else {
      axios.post(config.servurl+'/Search/DataReport',{
        search_value : search
      })
      .then(function (response) {
        res.send(response.data.data);
        return;
      })
      .catch(function (error) {
        console.log(error);
      })
    }
})

module.exports = router;