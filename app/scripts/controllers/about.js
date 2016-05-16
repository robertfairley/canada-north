'use strict';

/**
 * @ngdoc function
 * @name cng2016App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cng2016App
 */
angular.module('cng2016App')
  .controller('AboutCtrl', ["$scope", function($scope) {
    var dialog = $scope.getElementByID("dialog");

    $scope.$on('$viewContentLoaded', function($timeout) {
      $timeout(function() {
        dialog.removeClass("closed");
        dialog.addClass("open");
      },10);
    });
    $scope.$on('$destroy', function($timeout) {
      $timeout(function() {
        dialog.removeClass("open");
        dialog.addClass("close");
      },10);
    });
  }]);
