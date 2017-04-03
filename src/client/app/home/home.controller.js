(function() {
  'use strict';

  angular
    .module('myApp.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = [
  ];

  function HomeController() {
    var vm = this;
    vm.pageTitle = 'Dynamic Page Title';
    vm.checkbox1 = true;
  }

})();
