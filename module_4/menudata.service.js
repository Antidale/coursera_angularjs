(() => {
  'use strict'
  angular.module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http']
  MenuDataService = ($http) => {
    let service = this;

    service.getAllCategories = () => {

    }

    service.getItemsForCategory = (categoryShortName) => {

    }
  }
})
