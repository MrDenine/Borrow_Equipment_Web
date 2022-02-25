const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('regisEquipment', { data: 'regisEquipment' });
})

module.exports = router;