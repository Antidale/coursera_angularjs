(() => {
  app.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {

  }

  MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {

  }
})()
