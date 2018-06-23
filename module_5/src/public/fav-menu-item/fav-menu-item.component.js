(function () {
  "use strict";

  angular.module('public')
    .component('favMenuItem', {
      templateUrl: 'src/public/fav-menu-item/fav-menu-item.html',
      bindings: {
        menuItem: '<'
      },
      controller: MenuItemController
    });


  MenuItemController.$inject = ['ApiPath'];
  function MenuItemController(ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
  }

})();
