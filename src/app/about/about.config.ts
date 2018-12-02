namespace heroes.about {
  export const AboutConfig = ($stateProvider: any, $urlRouterProvider: any) => {
    $stateProvider.state('about', {
      url: '/about',
      component: 'about',
    });
    $urlRouterProvider.otherwise('/');
  };
  AboutConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
}
