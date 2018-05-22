(() => {
  angular.module('InterpolationDemo', [])
    .controller('InterpolationController', InterpolationController);

  InterpolationController.$inject = ['$scope'];
  function InterpolationController($scope) {
    let isHungry = true;
    $scope.seeminglyStatic = isHungry ? "hungry" : "content";
    $scope.noLongerStatic = "hungry";
    $scope.imageName = () => isHungry ? "hungry" : "content";
    $scope.message = () => isHungry ? "needs food" : "is napping";
    $scope.changeHungerState = () => {
      isHungry = !isHungry;
      $scope.noLongerStatic = isHungry ? "hungry" : "sleeping";
    }
    $scope.buttonName = () => isHungry ? "Feed Orange" : "Wake Orange";
  }

})();