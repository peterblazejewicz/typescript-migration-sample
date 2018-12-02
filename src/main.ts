/// <reference path="app/app.module.ts"/>
(() => {
  angular.element(() => {
    angular.bootstrap(document.body, [heroes.app.module.name], {
      strictDi: true,
    });
  });
})();
