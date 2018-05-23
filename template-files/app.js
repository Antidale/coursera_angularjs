(() => {
  'use strict';
  angular.module('MyApp', [])
    .controller('MyController', MyController);

  MyController.$inject = ['$scope']
  function MyController($scope) {

  }
})();
