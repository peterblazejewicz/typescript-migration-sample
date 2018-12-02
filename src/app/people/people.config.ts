/// <reference path="../interfaces.ts"/>
/// <reference path="people.service.ts"/>

namespace heroes.people {
  export const PeopleConfig = (
    $stateProvider: any,
    $urlRouterProvider: any,
  ) => {
    $stateProvider.state('people', {
      url: '/people',
      component: 'people',
      resolve: [
        {
          provide: 'people',
          useFactory: (
            service: heroes.people.PeopleService,
          ): ng.IPromise<Person[]> => service.getAllPeople(),
          deps: ['PeopleService'],
        },
      ],
    });
    $urlRouterProvider.otherwise('/');
  };
  PeopleConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
}
