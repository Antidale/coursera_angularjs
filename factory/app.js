(() => {
  'use strict';
  angular.module('MyApp', [])
    .controller('MyController', MyController)
    .controller('MyLimitedController', MyLimitedController)
    .factory('ShoppingListFactory', ShoppingListFactory);

  MyController.$inject = ['ShoppingListFactory']
  function MyController(ShoppingListFactory) {
    let vm = this;
    let shoppingListService = ShoppingListFactory();
    let clearEntry = () => {
      vm.itemName = "";
      vm.quantity = "";
    }
    clearEntry();

    vm.items = shoppingListService.getItems();

    vm.addItem = () => {
      shoppingListService.addItem(vm.itemName, vm.quantity)
      clearEntry();
    }

    vm.removeItem = (index) => shoppingListService.removeItem(index);
  }

  MyLimitedController.$inject = ['ShoppingListFactory']
  function MyLimitedController(ShoppingListFactory) {
    let vm = this;
    let shoppingListService = ShoppingListFactory(3);
    let clearEntry = () => {
      vm.itemName = "";
      vm.quantity = "";
    }
    clearEntry();

    vm.items = shoppingListService.getItems();

    vm.addItem = () => {
      shoppingListService.addItem(vm.itemName, vm.quantity)
      clearEntry();
    }

    vm.removeItem = (index) => shoppingListService.removeItem(index);
  }

  function ShoppingListService(maxItems) {
    let service = this;
    let items = []

    service.addItem = (name, quantity) => {
      if ((maxItems === undefined) ||
        (maxItems !== undefined && items.length < maxItems)) {
        items.push({ name: name, quantity: quantity })
      } else {
        throw new Error(`Max items ${maxItems} has been reached`)
      }
    }

    service.getItems = () => items;

    service.removeItem = (index) => items.slice(index, 1);
  }

  function ShoppingListFactory() {
    return (maxItems) => new ShoppingListService(maxItems);
  }
})();
