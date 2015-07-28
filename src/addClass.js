var hasClass = require("./hasClass")

var addClass = function(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

module.exports = addClass;