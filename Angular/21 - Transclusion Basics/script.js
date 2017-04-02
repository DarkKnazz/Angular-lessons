var app = angular.module("myApp", []);

app.directive("panel", function(){
  return {
    restrict: "E",
    transclude: true,
    template: '<div class="panel" ng-transclude>I am the panel</div>'
  }
})

