/// <reference path="../interfaces.ts"/>

namespace heroes.person {
  export const PersonConfig = (
    $stateProvider: any,
    $urlRouterProvider: any,
  ) => {
    $stateProvider.state('person', {
      url: '/people/{personId}',
      component: 'person',
      resolve: [
        {
          provide: 'person',
          useFactory: (service: any, $transitions$: any): ng.IPromise<Person> =>
            service.getPerson($transitions$.params().personId),
          deps: ['PeopleService', '$transition$'],
        },
      ],
    });
    $urlRouterProvider.otherwise('/');
  };
  PersonConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
}
