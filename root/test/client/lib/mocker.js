// Koberle's mocker
// Original code here: http://stackoverflow.com/questions/11439540/how-can-i-mock-dependencies-for-unit-testing-in-requirejs/11695463#11695463
define(function() {
  'use strict';

  var cnt = 0;

  return function(stubs) {
    var map = {};
    cnt++;

    Object.keys(stubs).forEach(function(key) {
      var stubName = ['stub', key.replace(/\//g, '_'), cnt].join('_');
      map[key] = stubName;
      define(stubName, function() {
        return stubs[key];
      });
    });

    return require.config({
      context: "context_" + cnt,
      map: {
        "*": map
      },
      baseUrl: require.s.contexts._.config.baseUrl
    });
  };

});