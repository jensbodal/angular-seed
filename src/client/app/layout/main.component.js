(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedMain', {
      controller: MainController,
      controllerAs: 'vm',
      template: getTemplate()
    });

  function getTemplate() {
    return `
      <div layout="column">
        <div class="header-container" flex>
          <angular-seed-header></angular-seed-header>
        </div>
        <div layout="row" flex>
          <div class="left-nav-container" flex>
            <angular-seed-left-nav></angular-seed-left-nav>
          </div>
          <div class="main-container" flex>
            <angular-seed-homepage></angular-seed-homepage>
          </div>
        </div>
      </div>
    `;
  }

  function MainController() {
    var vm = this;
    vm.pageTitle = 'Dynamic Page Title';
  }

})();
