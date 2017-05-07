'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:ClockCtrl
 * @description
 * # ClockCtrl
 * Controller of the lysAdminApp
 */
angular.module('lysAdminApp')
  .controller('ClockCtrl', function ($scope,ngAudio,Functions) {
    Functions.OpenModal('views/Modals/newAlarm.html', 'lg');
    $scope.sound = ngAudio.load("alarms/foghorn.mp3");
    $scope.sound.loop = true;
    $scope.sound.volume = 1;
    $scope.toggle_alarm = function(event){
      $scope.Alarm_On = !$scope.Alarm_On;
    };
    console.log($scope.sound.volume);
    //$scope.sound.play();
  });
