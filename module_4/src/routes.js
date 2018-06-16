(() => {
  'use strict'
  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/home.template.html'
      })
      .state('categoryList', {
        url: '/category-list',
        templateUrl: 'src/templates/category-list.template.html',
        controller: "CategoryListController as categories",
        resolve: {
          categories: ['MenuDataService',
            (MenuDataService) => MenuDataService.getAllCategories()
          ]
        }
      })
      .state('itemsList', {
        url: '/items-list/{category}',
        templateUrl: 'src/templates/items-list.template.html',
        controller: 'ItemsController as itemsList',
        resolve: {
          items: ['MenuDataService', '$stateParams',
            (MenuDataService, $stateParams) => MenuDataService.getItemsForCategory($stateParams.category)]
        }
      })

  }
})()
