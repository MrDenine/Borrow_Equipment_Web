const crypto = require('crypto');
const secret = "CAFKBE"; 

var encrypt_decrypt_tools = {
    encrypt : function (string){
        var mykey = crypto.createCipher('aes-128-cbc', secret);
        var mystr = mykey.update(string, 'utf8', 'hex');
        mystr += mykey.final('hex');
        return mystr;
    },
    decrypt : function (string){
        var mykey = crypto.createDecipher('aes-128-cbc', secret);
        var mystr = mykey.update(string, 'hex', 'utf8')
        return mystr;
    }
}

module.exports = encrypt_decrypt_tools;