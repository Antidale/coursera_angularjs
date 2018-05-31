(() => {
  'use strict';
  angular.module('DependencyInjectionDemo', [])
    .controller('DIController', DIController);

  function DIController($scope, $filter) {
    $scope.name = "Orange";

    $scope.upper = () => $scope.name = $filter('uppercase')($scope.name);
  }
})();