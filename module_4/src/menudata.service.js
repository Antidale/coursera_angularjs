(() => {
  'use strict'
  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  function MenuDataService($http, ApiBasePath) {
    let service = this;

    service.getAllCategories = () => {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/categories.json')
      })
        .then(response => response.data);
    }

    service.getItemsForCategory = (categoryShortName) => {
      return $http({
        method: 'GET',
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then(response => response.data);
    }
  }
})();
