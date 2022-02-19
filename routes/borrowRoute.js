const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('borrow',{title:'ทำรายการยืม'});
})

router.get('/return', (req, res, next) => {
    res.render('return',{title:'ทำรายการคืน'});
})

module.exports = router;