namespace heroes.hello {
  class HelloController implements ng.IController {
    greeting: string = 'hello';

    toggleGreeting() {
      this.greeting = this.greeting == 'hello' ? 'whats up' : 'hello';
    }
  }

  export const HelloComponent: ng.IComponentOptions = {
    templateUrl: './src/app/hello/hello.component.html',
    controller: HelloController,
    bindings: {
      greeting: '<',
    },
  };
}
