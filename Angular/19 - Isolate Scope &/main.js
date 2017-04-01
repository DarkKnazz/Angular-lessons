var app = angular.module("phoneApp", []);

app.controller("phoneCtrl", function($scope){
  $scope.callPhone = function(message){
    alert(message);
  }
})

app.directive("phone", function(){
  return {
    scope:{
      dial: "&"
    },
    template: '<input type="text" ng-model="value">' + '<div ng-click="dial({message:value})">Click me!</div>'
  }
})