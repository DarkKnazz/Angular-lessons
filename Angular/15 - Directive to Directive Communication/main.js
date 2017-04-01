var app = angular.module("bsuirApp", [])

app.controller("BsuirCtrl", function($scope){
  $scope.logBsuir = function(bsuir){
    alert(bsuir + " and Doroha is debil.");
  }
})

app.directive("knazz", function(){
  return{
    restrict: "E",
    scope: {
      done: "&"
    },
    template: '<input type="text" ng-model="bsuir">' +
    '{{bsuir}}' + '<div class="button" ng-click="done({bsuir:bsuir})">Im done!</div>'
  }
})