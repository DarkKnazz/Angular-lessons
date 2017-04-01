var app = angular.module("drinkApp", []);

app.controller("drinkCtrl", function($scope){
  $scope.flavour = "blackberry";
})

app.directive("drink", function(){
  return {
    scope:{
      flavour: "@"
    },
    template: '<div>{{flavour}}</div>'
  }
})