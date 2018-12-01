var express = require('express');
var router = express.Router();
var parser = require('ua-parser-js');

var listBrowsers = ['Mobile Safari', 'Safari', 'Chrome', 'Firefox']
    /*
    GET Video page. for a particular uid 

    TODO: Check if uid exists
    */
router.get('/:uid', function(req, res, next) {
    // If UA is from approved list
    var ua = parser(req.headers['user-agent']);
    console.log("222 222");
    console.log(ua.browser.name);
    if (inList(ua.browser.name, listBrowsers)) {
        res.render('index', { uid: req.params.uid });
    } else {
        res.render('nosupportindex', { uid: req.params.uid });
    }
    console.log(req.params.uid);

});

function inList(value, array) {
    return array.indexOf(value) > -1;
}

module.exports = router;
