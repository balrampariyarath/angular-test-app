'use strict';

/**
 * @ngdoc function
 * @name projApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projApp
 */
angular.module('projApp')
  .controller('AboutCtrl', function ($http,$location,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('./data.json').then(function (resposne) {
      console.log(resposne.data.details[$location.path().split('/')[1]-1]);
      $scope.data = resposne.data.details[$location.path().split('/')[1]-1];
    });
  });
