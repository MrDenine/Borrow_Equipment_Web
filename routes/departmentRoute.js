const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('department', { title: 'department' });
})

module.exports = router;