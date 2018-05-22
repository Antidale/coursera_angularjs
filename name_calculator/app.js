(function () {
  'use strict';
  angular.module('NameCalculator', [])
    .controller('NameCalculatorController', function ($scope) {
      $scope.name = ""
      $scope.calculateName = () => $scope.name.split('')
        .reduce((acc, val) => acc + val.charCodeAt(0), 0)
    })

})();