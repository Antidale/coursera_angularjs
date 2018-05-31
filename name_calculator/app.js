(function () {
  'use strict';
  angular.module('NameCalculator', [])
    .controller('NameCalculatorController', function ($scope) {
      $scope.name = ""
      $scope.totalValue = 0;
      $scope.calculateName = () => calculateWordValue($scope.name)
      $scope.calculateFromKeyUp = () => $scope.totalValue = $scope.calculateName();
      let calculateWordValue = word => word.split('')
        .reduce((acc, val) => acc + val.charCodeAt(0), 0);
    })

})();