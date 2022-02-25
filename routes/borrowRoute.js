const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('borrow',{title:'ทำรายการยืม'});
})

module.exports = router;