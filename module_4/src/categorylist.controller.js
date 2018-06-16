(() => {
  'use strict'
  angular.module('MenuApp')
    .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = ['MenuDataService']
  function CategoryListController(MenuDataService) {
    let vm = this;
    vm.items = [];
    vm.$onInit = () => MenuDataService.getAllCategories().then(response => vm.items = response)

  }
})();
