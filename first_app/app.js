(function () {
  'use strict'
  angular.module('myFirstApp', [])
    .controller('myFirstController', function ($scope) {
      $scope.name = "Orange";
      $scope.saysHello = function () {
        return ($scope.name + " says 'Hello'");
      };
    });
})();