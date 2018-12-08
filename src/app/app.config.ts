namespace heroes.app {
  export const config = (
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: any,
    personAgeCalculatorProvider: person.PersonAgeCalculatorProvider,
  ) => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/hello');
    personAgeCalculatorProvider.setDefaultAge(20);
  };
  config.$inject = [
    '$locationProvider',
    '$urlRouterProvider',
    'personAgeCalculatorProvider',
  ];
}
