'use strict';

/**
 * @ngdoc function
 * @name lysAdminApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the lysAdminApp
 */
angular.module('lysAdminApp')
.controller('ModalCtrl', function ($scope,$uibModalInstance,items,$sce) {
  $scope.items=items;
  $scope.CloseModal = function () {
      $uibModalInstance.dismiss('cancel');
    };
});
