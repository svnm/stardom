/* TODO: This should be a node module */

 var toggleClass = function(element, className) {

  var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

  for(; i < length; i++) {
    if (classes[i] === className) {
      classes.splice(i, 1);
      break;
    }
  }
  
  // className is not found
  if (length === classes.length) {
    classes.push(className);
  }

  element.className = classes.join(' ');

}

module.exports = toggleClass;
