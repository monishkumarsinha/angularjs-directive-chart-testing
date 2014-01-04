angular.module('directiveExampleApp')
  .controller('MainCtrl',
  function ($scope) {

    'use strict';

    $scope.riskData = [
      {
        high: 10000000,
        medium: 20000000,
        low: 20000000
      },
      {
        high: 25000000,
        medium: 50000000,
        low: 0
      },
      {
        high: 80000000,
        medium: 40000000,
        low: 20000000
      }
    ];
  });
