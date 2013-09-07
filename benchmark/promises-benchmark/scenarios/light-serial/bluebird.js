var Promise       = require('../../../../js/bluebird.js')
var listTest = require('./promises')(function(f) {

    var d = Promise.pending();
    f(function(a){
        d.fulfill(a);
    }, function(a) {
        d.reject(a);
    });
    return d.promise;

});

module.exports = function(path, noiseFactor) { return function(deferred) {
  return listTest(path, noiseFactor)
           .then(function(v){
                   deferred.resolve() })
}}