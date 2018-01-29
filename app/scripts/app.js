 (function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });
 
         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })
        	 .state('rooms', {
            	 url: '/rooms',
                 controller: 'RoomsCtrl as rooms',
            	 templateUrl: '/templates/rooms.html'
         	 });
     }

     angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
         .config(config);         
 })();