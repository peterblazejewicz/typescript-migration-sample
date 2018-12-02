namespace heroes.app {
  export const config = (
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: any,
  ) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/hello');
  };
  config.$inject = ['$locationProvider', '$urlRouterProvider'];
}
