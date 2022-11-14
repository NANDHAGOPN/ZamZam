app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider.when("/",{
		templateUrl:'index.html'
	}).when("/specials",{
		templateUrl:'indexspecial.html',
		controller:'specialctrl'
	}).when("/menu",{
		templateUrl:'index2.html',
		controller:'menuctrl'
		
	}).otherwise({redirectTo:"/"
        });

})
