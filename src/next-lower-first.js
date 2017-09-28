(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.lowerFirst = function (inString) {
    return inString.charAt(0).toLowerCase() + inString.slice(1);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.lowerFirst;
  }

}());
