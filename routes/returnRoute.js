const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('un_borrow', { data: 'un_borrow' });
})

module.exports = router;