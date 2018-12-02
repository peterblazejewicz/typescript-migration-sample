/// <reference path="hello.component.ts"/>
/// <reference path="hello.config.ts" />
namespace heroes.hello {
  export const module = angular
    .module('hello', [])
    .component('helloComponent', heroes.hello.HelloComponent)
    .config(heroes.hello.HelloConfig);
}
