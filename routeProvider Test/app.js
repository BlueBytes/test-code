var routeApp = angular.module('routeApp',['ngRoute']);

// config route provider
routeApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/home',{
				templateUrl: 'templates/home.html',
				controller: 'homeController'
			}).
			when('/member', {
				templateUrl: 'templates/member.html',
				controller: 'memberController'
			}).
			when('/about', {
				templateUrl: 'templates/about.html',
				controller: 'aboutController'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);

routeApp.controller('homeController', function($scope){
	$scope.message = "This is the home controller";
});

routeApp.controller('memberController', function($scope){
	$scope.message = "This is the member controller";
});

routeApp.controller('aboutController', function($scope){
	$scope.message = "This is the about controller";
});

