var app = angular.module('cityApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider){
    $routeProvider
    .when('/kyiv', {
        templateUrl: "animate-project.html",
        controller: "kyivCtrl"
    })
    .when('/kharkiv', {
        templateUrl: "animate-project.html",
        controller: "kharkivCtrl"
    })
    .when('/odesa', {
        templateUrl: "animate-project.html",
        controller: "odesaCtrl"
    })
    .when('/dnipro', {
        templateUrl: "animate-project.html",
        controller: "dniproCtrl"
    })
    .when('/zp', {
        templateUrl: "animate-project.html",
        controller: "zpCtrl"
    })
    .when('/lviv', {
        templateUrl: "animate-project.html",
        controller: "lvivCtrl"
    })      
});

app.controller("kyivCtrl", function($scope, $route){
    $scope.city = {
        name: "Київ",
        country: "Україна",
        year: "7 днів",
        population: "2500грн"
    }
})
app.controller("kharkivCtrl", function($scope, $route){
    $scope.city = {
        name: "Харків",
        country: "Україна",
        year: "7 днів",
        population: "2200грн"
    }
})
app.controller("odesaCtrl", function($scope, $route){
    $scope.city = {
        name: "Одеса",
        country: "Україна",
        year: "7 днів",
        population: "2300грн"
    }
})
app.controller("dniproCtrl", function($scope, $route){
    $scope.city = {
        name: "Дніпро",
        country: "Україна",
        year: "7 днів",
        population: "2200грн"
    }
})
app.controller("zpCtrl", function($scope, $route){
    $scope.city = {
        name: "Запоріжжя",
        country: "Україна",
        year: "7 днів",
        population: "2500грн"
    }
})
app.controller("lvivCtrl", function($scope, $route){
    $scope.city = {
        name: "Львів",
        country: "Україна",
        year: "7 днів",
        population: "2300грн"
    }
})