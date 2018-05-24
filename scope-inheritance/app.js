(() => {
  'use strict';
  angular.module('MyApp', [])
    .controller('MyController', MyController)
    .controller('SecondController', SecondController)
    .controller('ThirdController', ThirdController)
    .controller('FourthController', FourthController)
    .controller('ParentController', ParentController)
    .controller('ChildController', ChildController)

  MyController.$inject = ['$scope']
  function MyController($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 2;
  };

  SecondController.$inject = ['$scope']
  function SecondController($scope) {
    console.log("SC: $scope.parentValue: ", $scope.parentValue)
    console.log("CHILD $scope: ", $scope)

  }

  ThirdController.$inject = ['$scope']
  function ThirdController($scope) {
    $scope.parentValue = "Acutally, I mask my parent value by setting the value here"
    console.log("TC: $scope.parentValue: ", $scope.parentValue)
    console.log("ThirdController $scope: ", $scope)
  }

  FourthController.$inject = ['$scope']
  function FourthController($scope) {
    $scope.pc.parentValue = "And now I'm changing the pc.parentValue in a few places at once"
    console.log("FC: $scope.pc.parentValue: ", $scope.pc.parentValue)
    console.log("FC $scope: ", $scope)
  }

  function ParentController () {
    var parent = this;
    parent.name = "ParentController"
    parent.value = "I'm a parent";
  }

  function ChildController () {
    var child = this;
    child.name = "ChildController"
    child.value = "I'm a child";
  }

})();
