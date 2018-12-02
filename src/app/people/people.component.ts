namespace heroes.people {
  class PeopleController implements ng.IController {}

  export const PeopleComponent: ng.IComponentOptions = {
    bindings: {
      people: '<',
    },
    controller: PeopleController,
    templateUrl: './src/app/people/people.component.html',
  };
}
