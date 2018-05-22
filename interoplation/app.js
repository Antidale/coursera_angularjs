(() => {
  angular.module('InterpolationDemo', [])
    .controller('InterpolationController', InterpolationController);

  InterpolationController.$inject = ['$scope'];
  function InterpolationController($scope) {
    let isHungry = true;
    $scope.imageName = () => isHungry ? "hungry" : "content";
    $scope.message = () => isHungry ? "needs food" : "is napping";
    $scope.changeHungerState = () => isHungry = !isHungry;
    $scope.buttonName = () => isHungry ? "Feed Orange" : "Wake Orange";
  }

})();