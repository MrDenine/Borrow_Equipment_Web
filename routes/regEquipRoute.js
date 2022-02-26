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
    res.render('regisEquipment', { data: 'regisEquipment' });
})

module.exports = router;