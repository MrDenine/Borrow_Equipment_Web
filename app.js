const express = require('express');
const app = express();
const port = 8000;

try {
    //Static File
    app.use(express.static('public'));
    app.use('/', express.static(__dirname));

    //Set Views engine
    app.set('views', './views');
    app.set('view engine', 'ejs');

    //Setup Routes
    var indexRoute = require('./routes/indexRoute');
    var signinRoute = require('./routes/signinRoute');
    var reportRoute = require('./routes/reportRoute');
    var borrowRoute = require('./routes/borrowRoute');
    var memberRoute = require('./routes/memberRoute');

    //Initial Routes
    app.use('/', indexRoute);
    app.use('/signin', signinRoute);
    app.use('/report', reportRoute);
    app.use('/borrow', borrowRoute);
    app.use('/member', memberRoute);

    //Listen on port 3000
    app.listen(port, () => console.info(`[SERVER] Listening on port ${port}`));

    module.exports = app;
} catch (e) {
    console.log('\x1b[36m%s\x1b[0m', 'Exception:' + e)
}