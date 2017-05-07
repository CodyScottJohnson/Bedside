'use strict';

/**
 * @ngdoc service
 * @name lysAdminApp.Functions
 * @description
 * # Functions
 * Service in the lysAdminApp.
 */
angular.module('lysAdminApp')
.factory('Functions', function($uibModal,$rootScope) {
  // Service logic
  // ...
  var Functions = {};
  
  Functions.SQLDate = function(date){
    if (date === null || date===''){
      return null;
    }
    else{
      return new Date(date+'z');
    }
  };
  Functions.OpenModal = function(modalname,size,data,options){
    var default_options = {
     animation: true,
     templateUrl: modalname,
     controller: 'ModalCtrl',
     size: size,
     resolve: {
       items: function () {
         return data;
       }
     }
   };
   default_options = _.assign(default_options,options);
    var modalInstance = $uibModal.open(default_options);
   modalInstance.result.then(function (selectedItem) {
     //console.log(selectedItem);
   }, function () {
     console.log('done');
   });

  };



  // Public API here
  return Functions;
});
