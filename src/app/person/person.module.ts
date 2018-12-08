/// <reference path="../people/people.module.ts"/>
/// <reference path="./person-age-calculator.provider.ts" />
/// <reference path="./person-age-default.value.ts" />
/// <reference path="./person.component.ts"/>
/// <reference path="./person.config.ts"/>

namespace heroes.person {
  export const module = angular
    .module('person', [people.module.name])
    .value('defaultAge', defaultAge)
    .provider('personAgeCalculator', PersonAgeCalculatorProvider)
    .component('person', PersonComponent)
    .config(PersonConfig);
}
