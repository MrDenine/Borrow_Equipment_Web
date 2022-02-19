const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('report', { title: 'รายงาน' });
})

module.exports = router;