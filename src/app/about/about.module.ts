/// <reference path="about.component.ts"/>
/// <reference path="about.config.ts"/>
namespace heroes.about {
  export const module = angular
    .module('about', [])
    .component('about', AboutComponent)
    .config(AboutConfig);
}
