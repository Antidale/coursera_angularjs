(() => {
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems)

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    let vm = this;
    let message = "Nothing found"
    vm.searchTerm = "";
    vm.found = [];
    vm.message = undefined;
    vm.findItems = () => {

      //Set "Nothing Found" and don't bother with executing the AJAX call
      if (vm.searchTerm == "") {
        vm.message = message;
        return;
      }

      MenuSearchService.getMatchedMenuItems(vm.searchTerm)
        .then(response => {
          vm.found = response;
          vm.message = response.length > 0 ? undefined : message
        })
        .catch(() => {
          vm.found = []
          vm.message = message
        });

    }
    vm.remove = (index) => {
      console.log("got here!")
      vm.found.splice(index, 1)
    }

  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    let service = this;
    service.getMatchedMenuItems = (searchTerm) => {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(result => {
        let foundItems = [];
        result.data.menu_items.forEach(menuItem => {
          if (menuItem.description.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            foundItems.push(menuItem);
          }
        })
        return foundItems;
      });
    }
  }

  function FoundItems() {
    return {
      templateUrl: 'foundItems.html',
      restrict: 'E',
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    }
  }

})()
