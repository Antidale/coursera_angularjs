(() => {
  'use strict'
  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http']
  MenuDataService = ($http) => {
    let service = this;

    service.getAllCategories = () => {
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      })
    }

    service.getItemsForCategory = (categoryShortName) => {
      let baseURL = 'https://davids-restaurant.herokuapp.com/menu-items.json?category='
      return $http({
        method: 'GET',
        url: baseURL + categoryShortName
      })
    }
  }
})
