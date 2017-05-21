var myApp = angular.module('myApp',[]);


myApp.controller('AppCtrl' , ['$scope' , '$http' , function($scope , $http){
	//console.log('hello')
	var refresh = function() {
		$http.get('/contactlist').then( function( response) {
			//console.log( response );
			$scope.contactlist = response.data;
			$scope.contact = {};
		});
	};
refresh();
	$scope.addContact = function () {
		//console.log($scope.contact);
		$http.post('/contactlist' , $scope.contact ).then( function (response) {
			console.log( response );
			refresh();
		});
	};

	$scope.remove = function(id){
		//console.log(id);
		$http.delete('/contactlist/' + id).then( function( response) {
			refresh();
		});
	}


	$scope.edit = function( id ){
		$http.get('/contactlist/' + id).then( function ( response ) {
			//console.log( response );
			$scope.contact = response.data;
		});
	}

	$scope.update = function( ) {
		console.log( $scope.contact._id);
		$http.put('/contactlist/' + $scope.contact._id , $scope.contact ).then( function( response) {
			refresh();
		});
	}

	$scope.deselect = function(){
		$scope.contact = "";
	} 
}]);
