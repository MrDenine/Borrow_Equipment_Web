const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('borrow',{title:'ทำรายการยืม'});
})

router.get('/un', (req, res, next) => {
    res.render('un_borrow',{title:'ทำรายการคืน'});
})

module.exports = router;