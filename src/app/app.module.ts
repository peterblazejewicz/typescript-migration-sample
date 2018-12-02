/// <reference path="./app.component.ts"/>
/// <reference path="./app.config.ts"/>
/// <reference path="./app.run.ts"/>
/// <reference path="./hello/hello.module.ts"/>
/// <reference path="./about/about.module.ts"/>
/// <reference path="./people/people.module.ts"/>
/// <reference path="./person/person.module.ts"/>

namespace heroes.app {
  export const module = angular
    .module('heroes', [
      'ui.router',
      heroes.hello.module.name,
      heroes.about.module.name,
      heroes.people.module.name,
      heroes.person.module.name,
    ])
    .component('appComponent', heroes.app.AppComponent)
    .config(heroes.app.config)
    .run(heroes.app.run);
}
