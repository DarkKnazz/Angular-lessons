var app = angular.module("superhero", [])


app.directive("enter", function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      addClass("panel");
    })
  }
})

app.directive("leave", function(){
  return function(scope, element, attrs){
    element.bind("mouseleave", function(){
      removeClass("panel");
    })
  }
})