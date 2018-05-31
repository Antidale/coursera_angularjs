(() => {
  'use strict';
  angular.module('MyApp', [])
    .controller('ShoppingListAddController', ShoppingListAddController)
    .controller('ShoppingListShowController', ShoppingListShowController)
    .service('ShoppingListService', ShoppingListService);

  ShoppingListAddController.$inject = ['ShoppingListService']
  function ShoppingListAddController(ShoppingListService) {
    let vm = this;
    vm.itemName = "";
    vm.itemQuantity = "";

    vm.addItem = () => {
      if (vm.itemName && vm.itemQuantity) {
        ShoppingListService.addItem(vm.itemName, vm.itemQuantity);
        clearEntryFields();
      }
    }

    let clearEntryFields = () => {
      vm.itemName = "";
      vm.itemQuantity = "";
    }
  }

  ShoppingListShowController.$inject = ['ShoppingListService']
  function ShoppingListShowController(ShoppingListService) {
    let showList = this;
    showList.items = ShoppingListService.getItems();

    showList.removeItem = (itemIndex) => ShoppingListService.removeItem(itemIndex);
  }

  function ShoppingListService() {
    let service = this;
    let items = [];

    service.addItem = (itemName, quantity) => {
      items.push({
        Name: itemName,
        Quantity: quantity
      });
    }

    service.getItems = () => items;

    service.removeItem = (index) => items.splice(index, 1);
  }
})();
