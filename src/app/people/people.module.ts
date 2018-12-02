/// <reference path="people.component.ts"/>
/// <reference path="people.config.ts"/>
namespace heroes.people {
  export const module = angular
    .module('people', [])
    .service('PeopleService', PeopleService)
    .component('people', PeopleComponent)
    .config(PeopleConfig);
}
