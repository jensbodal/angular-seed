(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedLeftNav', {
      controller: LeftNavController,
      controllerAs: 'vm',
      template: getTemplate()
    });

  function getTemplate() {
    return `
      Left Nav
    `;
  }

  function LeftNavController() {
    var vm = this;
  }

})();
