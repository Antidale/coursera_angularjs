(() => {
  angular.module('LunchItems', [])
    .controller('LunchItemsController', LunchItemsController);

  LunchItemsController.$inject = ['$scope'];
  function LunchItemsController($scope) {
    const needData = 'Please enter data first';
    const aGoodLunch = 'Enjoy!';
    const tooMuch = 'Too much!';

    $scope.lunchItems = '';
    $scope.message = '';
    $scope.filteredMessage = '';
    $scope.buttonClicked = false;
    $scope.displayFiltered = false;
    $scope.calculateItemsCount = () => {
      $scope.message = setMessageValue(splitLunchItems());
      $scope.filteredMessage = setMessageValue(splitAndFilterLunchItems())
      $scope.buttonClicked = true;
    }

    let splitLunchItems = () => $scope.lunchItems.split(',');

    let splitAndFilterLunchItems = () => {
      return splitLunchItems().filter(item => item.trim().length > 0)
    }

    let setMessageValue = (itemsArray) => {
      if (itemsArray == "" || itemsArray.length == 0)
        return needData;

      if (itemsArray.length < 4)
        return aGoodLunch;

      return tooMuch;
    }
  }
})();