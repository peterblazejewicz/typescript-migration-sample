namespace heroes.app {
  export class AppController implements ng.IController {
    constructor(private $state: any) {}

    $onInit() {}
  }

  AppController.$inject = ['$state'];

  export const AppComponent: ng.IComponentOptions = {
    bindings: {},
    controller: AppController,
    templateUrl: './src/app/app.component.html',
  };
}
