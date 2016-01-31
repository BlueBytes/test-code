var testApp = angular.module('testApp', []);

testApp.controller('usersController', ['$scope','$http', function($scope, $http){
	$scope.hello = "Hello World!!";
	var url = "http://test.bluetoes.net/toes-api/public/user"; 
	var users = [];
	$scope.status = null;
	$scope.statusText = null;
	$scope.types = [{id:0, type: "member"},{id:1, type: "donor"}, {id:2, type: "ex-member"}, {id:3, type: "other"}];
	
	/**
	 * Fetch users from the API
	 */
	$scope.fetchUsers = function(){
		$http.get(url).then(function succesCallback(response){
			//$scope.status = response.status;
			//$scope.statusText = response.statusText;
			$scope.users = response.data._embedded.user;
		}, function errorCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});
		
	};
	
	/**
	 * Add a new user
	 */	
	$scope.postUser = function(){
		var newUser = {email : $scope.newEmail, type : $scope.selectedType.type};
		
		$http.post(url, newUser).then(function succesCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
			$scope.fetchUsers();
		}, function errorCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});
		
	};
	
	/**
	 * Update a user
	 */
	$scope.editUser = function(){
		
	}
	
	/**
	 * Delete a user
	 */
	$scope.deleteUser = function(user){
		var deleteURL = url + '/' + user.id;
		$http.delete(deleteURL, {id: user.id}).then(function succesCallback(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
			$scope.fetchUsers();
		}, function errorCallBack(response){
			$scope.status = response.status;
			$scope.statusText = response.statusText;
		});
	};
	
	$scope.fetchUsers();
}]);
