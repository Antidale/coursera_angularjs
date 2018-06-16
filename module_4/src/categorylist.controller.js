(() => {
  'use strict'
  angular.module('MenuApp')
    .controller('CategoryListController', CategoryListController);

  CategoryListController.$inject = ['categories']
  function CategoryListController(categories) {
    let vm = this;
    vm.categories = categories;

  }
})();
