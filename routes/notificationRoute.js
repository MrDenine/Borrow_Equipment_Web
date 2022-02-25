const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('notification', { title: 'notification' });
})

module.exports = router;