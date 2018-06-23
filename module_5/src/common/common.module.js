(function () {
  "use strict";

  angular.module('common', [])
    .constant('ApiPath', 'https://ancient-gorge-24703.herokuapp.com')
    .config(config);

  config.$inject = ['$httpProvider'];
  function config($httpProvider) {
    $httpProvider.interceptors.push('loadingHttpInterceptor');
  }

})();
