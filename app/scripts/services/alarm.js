'use strict';

/**
 * @ngdoc service
 * @name lysAdminApp.Alarm
 * @description
 * # Alarm
 * Service in the lysAdminApp.
 */
angular.module('lysAdminApp')
  .service('Alarm', function () {
    var Alarm = {data:{Alarms:[]}};
    return Alarm;
  });
