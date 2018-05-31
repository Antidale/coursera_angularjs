(() => {
  'use strict';
  angular.module('DigestDemo', [])
    .controller('DigestController', DigestController);

  DigestController.$inject = ['$scope']
  function DigestController($scope) {
    //an implicit watch is set on this from the view
    $scope.counter = 0;
    $scope.name = "Orange";
    $scope.handleCountOnce = () => {
      $scope.countOnce();
      $scope.countOnceWithWatcher();
    }
    //just creating a variable won't create any watchers
    $scope.countOnce = () => $scope.onceCounter = 1;

    //Set an explicit watch:
    $scope.countOnceWithWatcher = () => $scope.onceWatcher = 1;


    $scope.keepCounting = () => $scope.counter++;

    $scope.showWatcherCount = () => {
      console.log("# of watchers: ", $scope.$$watchersCount);
      console.log("onceCounter:", $scope.onceCounter);
      console.log("onceWatcher:", $scope.onceWatcher);
    }

    $scope.$watch('onceWatcher', (newValue, oldValue) => {
      console.log('onceWatcher oldValue: ', oldValue);
      console.log('onceWatcher newValue: ', newValue)
    })
  }
})();
