'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lysAdminApp
 */
angular.module('lysAdminApp')
  .controller('MainCtrl', function ($scope,$rootScope, $interval) {
    $rootScope.Time = new Date();
     $scope.toggle_menu_on =function($event){
       console.log(event);
       $scope.show_menu=true;
     }
     $scope.toggle_menu_off =function($event){
       console.log(event);
       $scope.show_menu=false;
     };


         // Don't start a new fight if we are already fighting
         if ( !angular.isDefined($rootScope.clock) ){

         $rootScope.clock = $interval(function() {
          $rootScope.Time = new Date();
        }, 1000);
       };


  });
