(function () {
  'use strict';

  angular
    .module('doneYet.layout')
    .config(LayoutConfig);

    LayoutConfig.$inject = [ 
      '$stateProvider',
      '$urlRouterProvider'
    ];

    function LayoutConfig($stateProvider, $urlRouterProvider) {
      $stateProvider 
        .state('doneYet', {
          url: '/',
          views: {
            'doneYetHeader': {
              templateUrl: 'app/header/header.template.html',
              controller: 'HeaderController',
              controllerAs: 'headerVm'
            },
            'doneYetLeft': {
              templateUrl: 'app/home/home.template.html',
              controller: 'LeftController',
              controllerAs: 'leftVm'
            },
            'doneYetContent': {
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
