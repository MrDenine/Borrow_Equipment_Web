const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('borrow',{title:'ทำรายการยืม'});
})

<<<<<<< HEAD
=======
router.get('/return', (req, res, next) => {
    res.render('return',{title:'ทำรายการคืน'});
})

>>>>>>> 4d82a87885efa1c72cd475ccf6b05f496493f52c
module.exports = router;