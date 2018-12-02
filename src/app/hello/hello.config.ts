namespace heroes.hello {
  export const HelloConfig = ($stateProvider: any, $urlRouterProvider: any) => {
    $stateProvider.state('hello', {
      url: '/hello',
      component: 'helloComponent',
    });
  };
  HelloConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
}
