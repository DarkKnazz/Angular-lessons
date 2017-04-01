var app = angular.module("superhero", [])


app.directive("enter", function(){
  return function(scope, element){
    element.bind("mouseenter", function(){
      console.log("Enter!");
    })
  }
})

app.directive("leave", function(){
  return function(scope, element){
    element.bind("mouseleave", function(){
      console.log("Leave!");
    })
  }
})