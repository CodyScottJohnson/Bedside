'use strict';

/**
 * @ngdoc overview
 * @name lysAdminApp
 * @description
 * # lysAdminApp
 *
 * Main module of the application.
 */
angular
  .module('lysAdminApp', [
    'config',
    'LocalStorageModule',
    'angular-gestures',
    'ngAnimate',
    'ngAudio',
    'ngCookies',
    'ui.bootstrap',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .run(function($rootScope, $state, localStorageService,Token) {
    $rootScope.settings = localStorageService.get('Settings');
    if(!angular.isDefined($rootScope.settings) || $rootScope.settings === null){
      $rootScope.settings = {"clock":{alarms:[]}};
      localStorageService.set('Settings', $rootScope.settings);
    }
  })
  .config(function($stateProvider, $urlRouterProvider,hammerDefaultOptsProvider,localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('bedSide');
    $urlRouterProvider.otherwise("/");
    hammerDefaultOptsProvider.set({recognizers: [[Hammer.Pan, {threshold:150}],[Hammer.Press,{threshold:9,time:1000}]]});
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/Shared/login.html',
        controller: 'LoginCtrl',
        data: {
          requireLogin: false
        }

      })
      .state('app', {
        url: '',
        abstract: true,
        templateUrl: 'views/app.html',
        controller: 'MainCtrl',
        data: {
          requireLogin: true
        }
      })
      .state('app.Main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',

      })
      .state('app.Clock', {
        url: '/clock',
        templateUrl: 'views/Pages/clock.html',
        controller: 'ClockCtrl',

      }).state('app.Packages', {
        url: '/packages',
        templateUrl: 'views/Pages/packages.html',
        controller: 'TestimonialCtrl',

      });

  });
