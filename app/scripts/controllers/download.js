'use strict';

/**
 * @ngdoc function
 * @name cng2016App.controller:MainCtrl
 * @description
 * # DownloadCtrl
 * Controller of the cng2016App
 */
angular.module('cng2016App')
  .controller('DownloadCtrl', ["$scope", function($scope) {
    var dialog = $scope.getElementByID("dialog");

    $scope.$on('$viewContentLoaded', function() {
      dialog.removeClass("closed");
      dialog.addClass("open");
    });
    $scope.$on('$destroy', function() {
      dialog.removeClass("open");
      dialog.addClass("close");
    });
  }]);
