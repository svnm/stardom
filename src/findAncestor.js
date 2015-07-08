var findAncestor = function (element, className) {
    while ((element = element.parentElement) && !element.classList.contains(className));
    return element;
}

module.exports = findAncestor;
