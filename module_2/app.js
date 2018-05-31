(() => {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {
    let vm = this;
    let clearEntry = () => {
      vm.itemName = "";
      vm.itemQuantity = "";
      vm.itemContainer = "";
    }
    clearEntry();

    vm.items = ShoppingListCheckOffService.getItemsToBuy();
    vm.buyItem = (index) => {
      ShoppingListCheckOffService.buyItem(index);
    }
    vm.addItem = () => {
      ShoppingListCheckOffService.addItemToBuy(vm.itemName, vm.itemQuantity, vm.itemContainer)
      clearEntry();
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    let vm = this;
    vm.items = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
    let service = this;
    let boughtItems = [];
    let toBuyItems = [
      {
        Name: "cat litter",
        Quantity: 1,
        Container: "bag"
      }, {
        Name: "tuna fish",
        Quantity: 5,
        Container: "cans"
      }, {
        Name: "milk",
        Quantity: 2,
        Container: "gallons"
      }, {
        Name: "cookies",
        Quantity: 3,
        Container: "packages"
      }
    ];

    service.getBoughtItems = () => boughtItems;
    service.getItemsToBuy = () => toBuyItems;

    service.buyItem = (itemIndex) => {
      toBuyItems.splice(itemIndex, 1).forEach((item) => boughtItems.push(item));
    }

    service.addItemToBuy = (name, quantity, container) => {
      toBuyItems.push({
        Name: name,
        Quantity: quantity,
        Container: container
      });
    }
  }
})();
