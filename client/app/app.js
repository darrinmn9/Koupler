angular.module('koupler', [
  'koupler.factories',
  'koupler.activities',
  'koupler.auth',
  'koupler.couples',
  'koupler.profile',
  'ui.router',
  'ngRoute',
  'ui.bootstrap',
  'ngFileUpload'
])
.config(function($stateProvider, $urlRouterProvider, $routeProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      templateUrl: 'app/auth/homepage.html',
      url:'/',
      controller: 'AuthCtrl'
    })
    .state('profile/:username', {
      url:'/profile',
      controller: 'ProfileCtrl',
      views: {
        '': {
          templateUrl:'app/profile/profile.html'
        },
        'profileInfo@profile': {
          templateUrl:'app/profile/partial-profileInfo.html'
        },
        'memories@profile': {
          templateUrl:'app/profile/partial-memories.html'
        }
      },
      authenticate: true,
    })
    .state('activities', {
      templateUrl: 'app/activityPickerCtrl/activityPicker.html',
      url:'/activities',
      controller: 'ActivityPickerCtrl',
      authenticate: true,
    })
    .state('match', {
      templateUrl: 'app/activityPickerCtrl/match.html',
      url: '/match',
      controller: 'CouplesCtrl',
      authenticate: true,
    })
    .state('publicProfile', {
      templateUrl: 'app/profile/publicProfile',
      url: '/profile/public:username',
      controller: 'PublicProfileCtrl',
    });


  // $routeProvider
  //   .when('/', {
  //     templateUrl: 'app/auth/homepage.html',
  //     controller: 'AuthCtrl'
  //   })
  //   .when('/activities/:username', {
  //     templateUrl: 'app/activityPickerCtrl/activityPicker.html',
  //     controller: 'ActivityPickerCtrl',
  //     authenticate: true,
  //   })
  //   .when('/match', {
  //     templateUrl: 'app/activityPickerCtrl/match.html',
  //     controller: 'CouplesCtrl',
  //     authenticate: true,
  //   })
  //   .otherwise({
  //     redirectTo: '/'
  //   });

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    // $httpProvider.interceptors.push('AttachTokens');
})
.run(function($rootScope, $location, AuthTokenFactory) {
  $rootScope.$on('$routeChangeStart', function(evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !AuthTokenFactory.isAuth()) {
      $location.path('/');
    }
  });
});
