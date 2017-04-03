(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedHeader', {
      controller: HeaderController,
      controllerAs: 'vm',
      template: getTemplate()
    });

  function getTemplate() {
    return `
      Angular Seed Header
    `;
  }

  function HeaderController() {
    var vm = this;
  }

})();
