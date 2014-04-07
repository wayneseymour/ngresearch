/**
* Created with ngresearch.
* User: wayneseymour
* Date: 2014-04-07
* Time: 12:35 PM
* To change this template use Tools | Templates.
*/
angular.module('myApp', [])

.directive('myDirective', function() {
  return {
    restrict: 'A',
    replace: true,
    template: '<a href="http://google.com">Click me to go to Google</a>'
  };
});