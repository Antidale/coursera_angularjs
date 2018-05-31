(() => {
  angular.module('CustomFiltersApp', [])
    .controller('FilterExampleController', FilterExampleController)
    .filter('bobToGeorge', BobToGeorgeFilter)
    //This is just to show that the string literal doesn't have to link tightly to the function name
    .filter('aFlexReplacement', FlexibleReplaceFilter)

  FilterExampleController.$inject = ['$scope', 'bobToGeorgeFilter', 'aFlexReplacementFilter']
  function FilterExampleController($scope, bobToGeorgeFilter, aFlexReplacementFilter) {
    $scope.byBob = "By Bob, I think you're right!";
    $scope.uncleGeorge = "Bob's your uncle";
    $scope.onions = "onions are have a horrible taste";
    $scope.aDirtyLie = "Orange was a horrible cat";
    $scope.useFilter = () => {
      $scope.byBob = bobToGeorgeFilter($scope.byBob);
      $scope.uncleGeorge = bobToGeorgeFilter($scope.uncleGeorge);
      $scope.onions = aFlexReplacementFilter($scope.onions, "horrible", "wonderful");
    }
  };

  function BobToGeorgeFilter() {
    return (input) => {
      input = input || "";
      return input.replace("Bob", "George");
    }
  }

  function FlexibleReplaceFilter() {
    return (input, target, replace) => {
      return input.replace(target, replace);
    }
  }
})();
