'use strict';

/**
 * @ngdoc function
 * @name vicbir2App.controller:FotosCtrl
 * @description
 * # FotosCtrl
 * Controller of the vicbir2App
 */
angular.module('vicbir2.discografia',[])
  .controller('DiscografiaCtrl', function ($scope,$http) {
    
   
    $scope.pageClass = 'page-discografia';
   	/*
    $scope.importar = function(){
    	$scope.galeria = [];
    	$http.get('php/listar.php').success(function(datos){
    		$scope.galeria = datos;
    	});
    };
    $scope.importar();
	*/

	$scope.save_photo = function(){
		$http.post('/php/recibir.php',{
			'title':$scope.title,
			'description':$scope.description,
			'image':$scope.image
		})
		.success(function(data,status,headers,config){
			console.log("Data correctly sended to DB");
			console.log(data);
		})	
		.error(function(data,status,headers,config){
			console.log("Failed to add data to DB");
		});
		
	}
  });
