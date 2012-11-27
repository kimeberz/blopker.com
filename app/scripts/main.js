require.config({
  shim: {
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min'
  }
});

require(['app', 'jquery'], function(app, $) {
  // use app here
  'use strict';
  $('body').hide();
  $(function() {
    $('body').fadeIn(1000);
  });
});
