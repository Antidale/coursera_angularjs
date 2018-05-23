(() => {

  list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  list2 = [
    {
      Name: "Orange",
      Age: 19
    }, {
      Name: "Fraster",
      Age: 15
    }, {
      Name: "Stumpy",
      Age: 16
    }, {
      Name: "Calico",
      Age: 10
    }
  ]

  'use strict';
  angular.module('MyApp', [])
    .controller('MyController', MyController);

  MyController.$inject = ['$scope']
  function MyController($scope) {
    $scope.resetEntryFields = () => {
      $scope.newPetName = "";
      $scope.newPetAge = "";
    }

    $scope.numberList = list1;
    $scope.petsList = list2;
    $scope.resetEntryFields();

    $scope.addPet = () => {
      $scope.petsList.push({
        Name: $scope.newPetName,
        Age: $scope.newPetAge
      });
      $scope.resetEntryFields();
    }

  }
})();
