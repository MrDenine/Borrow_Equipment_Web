const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('regisEquipment',{title:'ลงทะเบียนครุภัณฑ์'});
})

module.exports = router;