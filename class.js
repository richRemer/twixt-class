/**
 * Create function bound to DOM class.  Class will be enabled when function is
 * called with truthy value and disabled when called with falsey value.  When
 * called without an argument, the function will return a boolean indicating if
 * the class is set.
 * @param {Element} elem
 * @param {string} className
 * @returns {function}
 */
function clas(elem, className) {
    /**
     * @param {boolean} [val]
     * @returns {boolean|undefined}
     */
    return function() {
        if (arguments.length) {
            elem.classList[arguments[0] ? "add" : "remove"](className);
        } else {
            return elem.classList.has(className);
        }
    }
}

module.exports = clas;

