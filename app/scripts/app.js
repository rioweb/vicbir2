'use strict';

/**
 * @ngdoc overview
 * @name vicbir2App
 * @description
 * # vicbir2App
 *
 * Main module of the application.
 */
angular
  .module('vicbir2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'youtube-embed',
    'vicbir2.main',
    'vicbir2.fotos',
    'vicbir2.videos',
    'vicbir2.discografia',
    'vicbir2.contacto'
  ])
  .config(['$routeProvider','$locationProvider',function ($routes,$location) {
    $location.hashPrefix('!').html5Mode({
      enabled:true,
      requireBase:false
    });

    $routes.
    when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).
      when('/discografia', {
        templateUrl: 'views/discografia.html',
        controller: 'DiscografiaCtrl',
        controllerAs: 'disco'
      }).
      when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl',
        controllerAs: 'carga'
      })      .
      when('/fotos', {
        templateUrl: 'views/fotos.html',
        controller: 'FotosCtrl',
        controllerAs: 'fotos'
      })
      .
      when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .directive('navbar',function(){
    return{
      restrict: 'E',
      templateUrl:'/directives/navbar.html'
    };
  })
  .controller('navctrl', ['$scope','$location',function($scope,$location){

      $scope.isActive = function(ab){
        return ab === $location.path(); 
      };  
  }])
  .controller('Pass',['$scope',function($scope){
    $scope.chau = true;
    $scope.hola = false;
    $scope.alert= false;
    $scope.chequeo=function(p){
      if (p==='luis') {
        $scope.hola=true;
        $scope.chau = false;
      }else{
        $scope.alert= true;
      }
    };
  }])
  .filter('startFrom', function(){
    return function(input,start){
      start = parseInt(start, 9);
      return input.slice(start);
    };
  });
    