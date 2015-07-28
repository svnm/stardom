/*
 * Check if string is HTML
 */
var isHtml = function(str) {
  if (str.charAt(0) === '<' && str.charAt(str.length - 1) === '>' && str.length >= 3) return true;

  var match = quickExpr.exec(str);
  return !!(match && match[1]);
};

module.exports = isHtml;