'use strict';

/**
 * @ngdoc overview
 * @name cng2016App
 * @description
 * # Simple one page app promoting a type design project.
 *
 * Main module of the application.
 */
angular
  .module('cng2016App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/download', {
        templateUrl: 'views/download.html',
        controller: 'DownloadCtrl',
        controllerAs: 'download'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
