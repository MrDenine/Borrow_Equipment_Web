const config = {};

config.port = 8000; //website port
config.servurl = 'http://localhost:3000'; //service url/port
// config.weburl = 'http://localhost:8000/';
config.weburl = 'http://157.230.254.198:8000/';
config.cookie_options = {
    maxAge: 86400 * 1000, // 24 hours
    httpOnly: true, // http only, prevents JavaScript cookie access
    secure: true, // cookie must be sent over https / ssl
    path:"http://157.230.254.198:8000/"
}
config.logout = {
    maxAge: 0, // 1 minute
    httpOnly: true, // http only, prevents JavaScript cookie access
    secure: true, // cookie must be sent over https / ssl
    path:"http://157.230.254.198:8000/"
}


config.cookie_test = {
    maxAge: 60 * 1000, // 1 minute
    httpOnly: true, // http only, prevents JavaScript cookie access
    secure: true, // cookie must be sent over https / ssl
    path:"http://157.230.254.198:8000/"
}

module.exports = config;