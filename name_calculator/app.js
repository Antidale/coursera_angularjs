(function () {
  'use strict';
  angular.module('NameCalculator', [])
    .controller('NameCalculatorController', function ($scope) {
      $scope.name = ""
      $scope.totalValue = 0;
      $scope.calculateName = () => $scope.name.split('')
        .reduce((acc, val) => acc + val.charCodeAt(0), 0);
      $scope.calculateFromKeyUp = () => $scope.totalValue = $scope.calculateName();

    })

})();