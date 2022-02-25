const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('department', { data: 'department' });
})

module.exports = router;