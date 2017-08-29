'use strict';


angular.module('projApp')
  .controller('MainCtrl', function ($http,$scope,$rootElement) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.data = [];
    $http.get('./data.json').then(function (response) {
      console.log(response);
      $scope.data = response.data.details;
      console.log(response.data.details)
      console.log($scope.data);
    });
  });
