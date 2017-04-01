var app = angular.module("superhero", [])


app.directive("superman", function(){
  return {
    restrict: "E",
    template: "<div>Here am I</div>"
  }
})