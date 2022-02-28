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
    res.render('notification', { title: 'notification', udt : getUserData(req) , role : getUserRole(req)  });
})
router.post('/PostReadNotify',(req,res,next)=>{
    var post_reportID = req.body.reportID;

    if(post_reportID){ 
        axios
        .post(config.servurl + '/SetData/setReadNoti',{
            reportID : post_reportID,
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

// router.post('/search',(req,res,next)=>{
//     var Post_typeSearch = req.body.typeSearch;
//     var Post_firstDate = req.body.firstDate;
//     var Post_untilDate = req.body.untilDate;
//     if(Post_typeSearch && Post_firstDate && Post_untilDate){
//       axios.post(config.servurl+'/Search/DataReport',{
//         typeSearch : 2,
//         firstDate : Post_firstDate,
//         untilDate : Post_untilDate
//       })
//       .then(function (response) {
//         res.send(response.data.data);
//         return;
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//     } else {
//       res.status(400).send('This request is not complete.'); //echo
//       return;
//     }
// })
module.exports = router;