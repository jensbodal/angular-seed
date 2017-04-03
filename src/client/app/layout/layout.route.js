(function () {
  'use strict';

  angular
    .module('myApp.layout')
    .config(LayoutConfig);

    LayoutConfig.$inject = [
      '$stateProvider',
      '$urlRouterProvider'
    ];

    function LayoutConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('myApp', {
          url: '/',
          views: {
            'myAppHeader': {
              templateUrl: 'app/header/header.template.html',
              controller: 'HeaderController',
              controllerAs: 'headerVm'
            },
            'myAppLeft': {
              templateUrl: 'app/home/home.template.html',
              controller: 'LeftController',
              controllerAs: 'leftVm'
            },
            'myAppContent': {
              templateUrl: 'app/home/home.template.html',
              controller: 'HomeController',
              controllerAs: 'vm'
            }
          }
        });

      // all unknown routes go to homepage
      $urlRouterProvider.otherwise('/');
    }
})();
