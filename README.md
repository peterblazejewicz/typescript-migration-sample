# TypeScript migration sample

Example project showing migration from ES5 to ES6 and typescript using AngularJS 1.* - before moving to Angular

## Sample code

```ts
/// <reference path="app/app.module.ts"/>
(() => {
  angular.element(() => {
    angular.bootstrap(document.body, [heroes.app.module.name], {
      strictDi: true,
    });
  });
})();
```

```ts
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
```

```ts
/// <reference path="../interfaces.ts"/>
namespace heroes.person {
  interface PersonComponentChanges extends ng.IOnChangesObject {
    [key: string]: any;
    person: ng.IChangesObject<Person>;
  }

  class PersonController implements ng.IController {
    public person: Person | undefined;

    constructor() {}

    $onChanges(changes: PersonComponentChanges) {
      if (changes.person.isFirstChange) {
        // do other stuff with person object
      }
    }

    $onInit() {}

    $doCheck() {}

    $postLink() {}

    $onDestroy() {}
  }

  export const PersonComponent: ng.IComponentOptions = {
    bindings: {
      person: '<',
    },
    controller: PersonController,
    templateUrl: './src/app/person/person.component.html',
  };
}
```

## Author

@peterblazejewicz
