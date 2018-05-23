(() => {
  'use strict';
  angular.module('MyApp', [])
    .controller('MyController', MyController);

  MyController.$inject = ['$scope', '$timeout']
  function MyController($scope, $timeout) {
    $scope.counter = 0;

    $scope.incrementSetTimeout = () => {
      setTimeout(() => {
        $scope.counter++
        console.log("counter incremented to: ", $scope.counter)
        console.log("but note that the page doesn't update")
      }, 500);
    }

    $scope.incrementSetTimeoutDigest = () => {
      setTimeout(() => {
        $scope.counter++
        console.log("counter incremented to: ", $scope.counter)
        $scope.$digest();
        console.log("any errors would be thrown outside the context of angular")
      }, 500);
    }

    $scope.incrementSetTimeoutApply = () => {
      setTimeout(() => {
        $scope.$apply(() => {
          $scope.counter++
          console.log("counter incremented to: ", $scope.counter)
          console.log("$scope.$apply calls $scope.$digest, and any errors are thrown in the context of angular")
        })
      }, 500);
    }

    $scope.incrementTimeout = () => {
      $timeout(() => {
        $scope.counter++
        console.log("counter incremented to: ", $scope.counter)
        console.log("and done in an 'angular' way")
      }, 500);
    }
  }
})();
