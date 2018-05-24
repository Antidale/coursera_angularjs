(() => {
  'use strict';
  angular.module('MyApp', [])
    .controller('MyController', MyController)
    .controller('SecondController', SecondController);

  MyController.$inject = ['$scope']
  function MyController($scope) {

  };

  function SecondController() {

  }
})();
