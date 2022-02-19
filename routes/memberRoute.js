const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('member', { title: 'บุคลากร' });
})

module.exports = router;