const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('signin', { data: 'signin' });
})

module.exports = router;