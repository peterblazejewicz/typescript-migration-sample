/// <reference path="../people/people.module.ts"/>
/// <reference path="./person.component.ts"/>
/// <reference path="./person.config.ts"/>

namespace heroes.person {
  export const module = angular
    .module('person', [people.module.name])
    .component('person', PersonComponent)
    .config(PersonConfig);
}
