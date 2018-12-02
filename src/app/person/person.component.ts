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
