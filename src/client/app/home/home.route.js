(function () {
  'use strict';

  angular
    .module('appName.home')
    .config(HomeConfig);

    HomeConfig.$inject = [ 
      '$stateProvider',
      '$urlRouterProvider'
    ];

    function HomeConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider 
        .state('homeState', {
          url: '/',
          views: {
            'appNameMain': {
              templateUrl: 'app/home/home.template.html',
              controller: 'HomeController',
              controllerAs: 'vm'
            }
          }
        })
    }
})();
